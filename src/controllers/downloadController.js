const ffmpeg = require("fluent-ffmpeg");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "..", "videos/input");
const outputDir = path.join(__dirname, "..", "videos/output");

/**
 * Vérifie si les répertoires d'entrée et de sortie existent, et les crée s'ils n'existent pas.
 */
if (!fs.existsSync(inputDir)) {
	fs.mkdirSync(inputDir, { recursive: true });
}

if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}
const download = (req, res) => {
	const videoUrl = req.query.url;
	if (!videoUrl) {
		return res.status(400).send("URL manquante");
	}

	/**
	 * Utilisez la date actuelle pour générer un identifiant unique pour la vidéo.
	 */
	const videoId = new Date().getTime();
	const inputVideoPath = path.join(inputDir, `${videoId}.mp4`);
	const outputVideoPath = path.join(outputDir, `${videoId}-dl.mp4`);

	const getDownloadCommand = (platform, videoUrl, outputPath) => {
		switch (platform) {
			case "youtube":
				return `yt-dlp --no-check-certificate -f bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best -o "${inputVideoPath}" "${videoUrl}"`;
			case "twitter":
				return `yt-dlp --no-check-certificate -o "${outputPath}" "${videoUrl}"`; // La commande peut être la même, mais gardée ici pour la personnalisation future
			default:
				return null; // ou une commande par défaut si nécessaire
		}
	};

	const youtubeDlCommand = getDownloadCommand(
		req.query.p,
		videoUrl,
		inputVideoPath
	);

	exec(youtubeDlCommand, (error, stdout, stderr) => {
		if (error) {
			console.error(`Erreur lors du téléchargement: ${error.message}`);
			return res
				.status(500)
				.send("Erreur lors du téléchargement de la vidéo");
		}
		if (stderr) {
			console.error(`Erreur youtube-dl: ${stderr}`);
		}
		console.log(`Sortie youtube-dl: ${stdout}`);
		if (fs.existsSync(inputVideoPath)) {
			ffmpeg(inputVideoPath)
				.output(outputVideoPath) // S'assurer que cette ligne est bien placée et correctement formulée
				.videoCodec("libx264") // Utiliser .videoCodec pour spécifier le codec
				.outputOptions(["-crf 23"]) // Utiliser un tableau pour les options peut aider à clarifier la commande
				.on("end", function () {
					console.log("Conversion terminée.");
					res.download(outputVideoPath);
				})
				.on("error", function (err) {
					console.error("Erreur FFmpeg:", err.message);
					res.status(500).send(
						"Erreur lors du traitement de la vidéo"
					);
				})
				.run();
		} else {
			console.log(
				"Fichier non trouvé après téléchargement:",
				inputVideoPath
			);
			res.status(500).send(
				"Le fichier n'a pas été téléchargé correctement."
			);
		}
	});
};

module.exports = {
	download,
};

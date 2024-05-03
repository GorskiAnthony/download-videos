const ffmpeg = require("fluent-ffmpeg");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const { getDownloadCommand } = require("../services/youtubeDl");
const { isFolderExist } = require("../services/isFolderExist");

const inputDir = path.join(__dirname, "..", "videos/input");
const outputDir = path.join(__dirname, "..", "videos/output");

isFolderExist(inputDir);
isFolderExist(outputDir);

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
			console.error(`Erreur yt-dlp: ${stderr}`);
		}
		console.log(`Sortie yt-dlp: ${stdout}`);
		if (fs.existsSync(inputVideoPath)) {
			ffmpeg(inputVideoPath)
				.output(outputVideoPath)
				.videoCodec("libx264") // J'utilise .videoCodec pour spécifier le codec
				.outputOptions(["-crf 23"]) // Et un tableau pour les options peut aider à clarifier la commande
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

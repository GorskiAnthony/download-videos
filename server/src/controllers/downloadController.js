const ffmpeg = require("fluent-ffmpeg");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const { getDownloadCommand } = require("../services/youtubeDl");
const { isFolderExist } = require("../services/isFolderExist");
const { scheduleFileDeletion } = require("../services/scheduleFileDeletion");

const inputDir = path.join(__dirname, "..", "videos/input");
const outputDir = path.join(__dirname, "..", "videos/output");

isFolderExist(inputDir);
isFolderExist(outputDir);

const download = (req, res, io) => {
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

	const youtubeDlCommand = getDownloadCommand(videoUrl, inputVideoPath);

	exec(youtubeDlCommand, (error, stdout) => {
		if (error) {
			console.error(`Erreur lors du téléchargement: ${error.message}`);
			return res
				.status(500)
				.send("Erreur lors du téléchargement de la vidéo");
		}

		console.log(`Sortie yt-dlp: ${stdout}`);
		io.emit("downloadProgress", {
			id: videoId,
			message: "Download complete, starting conversion...",
		});

		if (fs.existsSync(inputVideoPath)) {
			ffmpeg(inputVideoPath)
				.output(outputVideoPath)
				.videoCodec("libx264") // J'utilise .videoCodec pour spécifier le codec
				.outputOptions(["-crf 23"]) // Et un tableau pour les options peut aider à clarifier la commande
				.on("progress", function (progress) {
					io.emit("conversionProgress", {
						id: videoId,
						progress: Math.floor(progress.percent),
					});
				})
				.on("end", function () {
					console.log("Conversion terminée.");
					const videoUrl = `${req.protocol}://${req.get(
						"host"
					)}/videos/${path.basename(outputVideoPath)}`;
					res.json({ done: true, outputVideoPath: videoUrl });
					io.emit("downloadComplete", { id: videoId, url: videoUrl });

					// Planifier la suppression des fichiers
					scheduleFileDeletion(inputVideoPath); // Supprime après 1 heure
					scheduleFileDeletion(outputVideoPath); // Supprime après 1 heure
				})

				.on("error", function (err) {
					console.error("Erreur FFmpeg:", err.message);
					io.emit("conversionError", {
						id: videoId,
						error: err.message,
					});

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
			io.emit("downloadError", {
				id: videoId,
				message: "File not found after download.",
			});

			res.status(500).send(
				"Le fichier n'a pas été téléchargé correctement."
			);
		}
	});
};

module.exports = {
	download,
};

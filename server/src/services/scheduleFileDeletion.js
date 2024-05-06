const fs = require("fs");
function scheduleFileDeletion(filePath, delay = 3600000) {
	// Retard par défaut d'une heure
	setTimeout(() => {
		fs.unlink(filePath, (err) => {
			if (err)
				console.error("Erreur lors de la suppression du fichier:", err);
			else console.log("Fichier supprimé avec succès:", filePath);
		});
	}, delay);
}

module.exports = { scheduleFileDeletion };

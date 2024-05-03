const fs = require("fs");
/**
 * Vérifie si les répertoires d'entrée et de sortie existent, et les crée s'ils n'existent pas.
 */

function isFolderExist(directory) {
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, { recursive: true });
	}
}

module.exports = { isFolderExist };

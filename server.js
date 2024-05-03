require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
	if (err) {
		console.error(err);
		process.exit(1);
	} else {
		console.log(`Serveur démarré sur le port: ${PORT}`);
	}
});

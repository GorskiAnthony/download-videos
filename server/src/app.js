const express = require("express");
const cors = require("cors");
const app = express();

app.use(
	cors({
		origin: process.env.FRONTEND_URL || "http://localhost:3000",
		credentials: true,
	})
);

const { download } = require("./controllers/downloadController");

app.get("/", (req, res) => {
	res.send("Bonjour, bienvenue sur mon application de traitement vidéo!");
});

app.get("/download", download);

module.exports = app;

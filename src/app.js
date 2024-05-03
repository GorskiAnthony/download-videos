const express = require("express");

const { download } = require("./controllers/downloadController");

const app = express();

app.get("/", (req, res) => {
	res.send("Bonjour, bienvenue sur mon application de traitement vidéo!");
});

app.get("/download", download);

module.exports = app;

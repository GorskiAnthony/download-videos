const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(
	cors({
		origin: process.env.FRONTEND_URL || "http://localhost:5500",
		credentials: true,
	})
);

app.use("/videos", express.static(path.join(__dirname, "/videos/output")));

const { download } = require("./controllers/downloadController");

app.get("/", (req, res) => {
	res.send("Bonjour, bienvenue sur mon application de traitement vidéo!");
});

app.get("/download", download);

module.exports = app;

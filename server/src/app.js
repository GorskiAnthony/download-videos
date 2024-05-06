const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

/** Pour l'utilisation de socket.io */
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const configCors = {
	origin: process.env.FRONTEND_URL || "http://localhost:5500",
	methods: ["GET"],
	credentials: true,
};

const io = new Server(server, {
	cors: configCors,
});

app.use(cors(configCors));

app.use("/videos", express.static(path.join(__dirname, "/videos/output")));

const { download } = require("./controllers/downloadController");

app.get("/", (req, res) => {
	res.send("Bonjour, bienvenue sur mon application de traitement vidéo!");
});

app.get("/download", (req, res) => {
	download(req, res, io);
});

io.on("connection", (socket) => {
	console.log(socket.id, " user connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});

module.exports = server;

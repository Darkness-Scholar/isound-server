"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const socket_io_1 = require("socket.io");
const audio_route_1 = require("./routes/audio/audio.route");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const server = http.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
});
app.use("/audio", audio_route_1.default);
io.on("connection", (socket) => {
    socket.on("disconect", () => {
        console.log("User disconnected");
    });
    socket.on("message", (message) => {
        console.log(`message: ${message}`);
        io.emit("message", message);
    });
});
let PORT = process.env.PORT || 8888;
server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

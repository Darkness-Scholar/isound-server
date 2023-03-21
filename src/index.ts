import express = require("express")
import __cache__ from "./services/cache.service"
require('dotenv').config();
import cors = require("cors")
import bodyParser = require('body-parser')
import http = require("http")
// import { Server } from "socket.io"
import audio from "./routes/audio/audio.route"
import user from "./routes/user/user.router"
import playlist from "./routes/playlist/playlist.router";
import e = require("express");
import upload from "./routes/upload/upload.router";

// Declare zone
declare global {
    var __cache__:any
    namespace Express {
        interface Request {
            user: any
        }
    }
}
// ===========>

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const server = http.createServer(app)
// const io = new Server(server, {
//     cors: {
//         origin: process.env.PRODUCT,
//         methods: ['GET', 'POST']
//     }
// })

async function main () {
    // __cache__.set(1, 'hello_world', 10000)
    // const value = __cache__.get(1)
    
}; main()

let build_time = new Date()

app.get("/", (req, res) => {
    res.json(`Last build :: ${build_time}`)
})

app.use("/audio", audio)
app.use("/user", user)
app.use("/playlist", playlist)
app.use("/upload", upload)

/*
io.on("connection", (socket) => {

    console.log(`ok: server`)

    socket.on("disconect", () => {
        console.log("User disconnected")
    })

    socket.on("message", (message) => {
        console.log(`message: ${message}`);
        io.emit("message", message);
    })
})
*/

let PORT = process.env.PORT || 8888;
server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })
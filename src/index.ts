import express = require("express")
import cors = require("cors")
import bodyParser = require('body-parser')
import http = require("http")
import { Server } from "socket.io"
import { Sequelize } from "sequelize"
import audio from "./routes/audio/audio.route"
import { getAudioInfo } from "./routes/audio/audio.service"
import user from "./routes/user/user.router"

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
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
})


async function main () {
    // Testing only
    let example:any = {
        'user_id_example_001': {
            refreshToken: 'user_id_example_001',
            expiresIn: null
        },
        'user_id_example_002': {
            refreshToken: 'user_id_example_002',
            expiresIn: null
        },
        'user_id_example_003': {
            refreshToken: 'user_id_example_003',
            expiresIn: null
        },
    }
    for (let item in example) {
        // @ts-ignore
        if (example[item].refreshToken === 'user_id_example_002') {
            console.log(example[item])
        } else { console.log(`Nope`) }
    }

}; main()

app.use("/audio", audio)
app.use("/user", user)

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

let PORT = process.env.PORT || 8888;
server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })
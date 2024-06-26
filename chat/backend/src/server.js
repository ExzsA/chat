const { WebSocketServer, OPEN } = require ("ws");
const dotenv = require("dotenv")


dotenv.config()

const wss = new WebSocketServer({port: process.env.PORT || 8080})

wss.on("connection", (ws)=> {
    ws.on("error", console.error)


    ws.on("message", (data) => {
        console.log(data.toString())
        wss.clients.forEach((client) => {if (client.readyState === ws.OPEN) { client.send(data.toString())}
    


    console.log("está online")
})
})}
)
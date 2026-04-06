const express = require("express");
const { createServer } = require("http");
const { server: wisp } = require("@mercuryworkshop/wisp-js/server");

const app = express();
const server = createServer(app);

app.get("/", (req, res) => res.send("Wisp running"));

server.on("upgrade", (req, socket, head) => {
    wisp.routeRequest(req, socket, head);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Wisp server running on port ${PORT}`);
});

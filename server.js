const express = require("express");
const { createServer } = require("http");
const { WispServer } = require("@mercuryworkshop/wisp-js/server");

const app = express();
const server = createServer(app);

app.get("/", (req, res) => res.send("Wisp running"));

const wisp = new WispServer();
wisp.attach(server, "/wisp/");

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Wisp server running on port ${PORT}`);
});

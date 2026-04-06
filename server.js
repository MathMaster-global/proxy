const express = require("express");
const { createServer } = require("http");
const { createWispServer } = require("wisp-server-node");

const app = express();
const server = createServer(app);

app.get("/", (req, res) => res.send("Wisp running"));

createWispServer(server, { prefix: "/wisp/" });

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Wisp server running on port ${PORT}`);
});
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);

app.use(express.static("ui"));

server.listen(4000, () => {
  console.log("app listening");
});

module.exports = new Server(server);
require("./socket");

const express = require("express");
const ws = require("ws");

const { PORT } = require("./config/config") || 5000;
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");

const wsServer = new ws.Server({ noServer: true });
wsServer.on("connection", (socket) => {
  socket.on("message", (message) => {
    message = message.toString();
    
    console.log(message);
    socket.send(message);
  });
});

const app = express();

require("./config/mysql");

app.use("/static", express.static("public"));

app.use("/", routes);
app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}...`)
);
server.on("upgrade", (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (socket) => {
    wsServer.emit("connection", socket, request);
  });
});

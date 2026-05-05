const http = require("http");
const app = require("./app");
const initSocket = require("./websocket/socket");

const server = http.createServer(app);

// attach socket
initSocket(server);

server.listen(5000, () => {
  console.log("Server + WebSocket running on 5000");
});

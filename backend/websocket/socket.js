const { Server } = require("socket.io");

let io;

function initSocket(server) {
  io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
}

// emit updates
function sendRouteUpdate(data) {
  if (io) {
    io.emit("route_update", data);
  }
}

module.exports = initSocket;
module.exports.sendRouteUpdate = sendRouteUpdate;
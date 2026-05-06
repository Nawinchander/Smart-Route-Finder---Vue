const Queue = require("bull");

const routeQueue = new Queue("routeQueue", {
  redis: { host: "127.0.0.1", port: 6379 }
});

module.exports = routeQueue;
const LRU = require("lru-cache");

const cache = new LRU({
  max: 100, // max routes
  ttl: 1000 * 60 * 5 // 5 minutes
});

module.exports = cache;
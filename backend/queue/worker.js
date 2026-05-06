const routeQueue = require("./routeQueue");
const Graph = require("../dsa/Graph");
const cache = require("../cache/lruCache");
const { sendRouteUpdate } = require("../websocket/socket");

const graph = new Graph();

["A","B","C","D","E"].forEach(n => graph.addNode(n));

graph.addEdge("A","B",5);
graph.addEdge("A","C",2);
graph.addEdge("B","D",1);
graph.addEdge("C","D",7);
graph.addEdge("D","E",3);

// process jobs
routeQueue.process(async (job) => {
  const { start, end } = job.data;

  const key = `${start}-${end}`;

  // 🔥 check cache
  if (cache.has(key)) {
    const cached = cache.get(key);

    sendRouteUpdate({ ...cached, cached: true });
    return cached;
  }

  // compute route
  const result = graph.dijkstra(start, end);

  // store in cache
  cache.set(key, result);

  // emit live update
  sendRouteUpdate({ ...result, cached: false });

  return result;
});


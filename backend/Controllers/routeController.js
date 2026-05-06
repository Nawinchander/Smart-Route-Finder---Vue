const routeQueue = require("../queue/routeQueue");

exports.getRoute = async (req, res) => {
  const { start, end } = req.query;

  // add job to queue
  const job = await routeQueue.add({ start, end });

  // wait for result (or you can return jobId for async polling)
  const result = await job.finished();

  res.json(result);
};




// const Graph = require("../dsa/Graph");
// const { sendRouteUpdate } = require("../websocket/socket");

// const graph = new Graph();

// ["A", "B", "C", "D", "E"].forEach(n => graph.addNode(n));

// graph.addEdge("A", "B", 5);
// graph.addEdge("A", "C", 2);
// graph.addEdge("B", "D", 1);
// graph.addEdge("C", "D", 7);
// graph.addEdge("D", "E", 3);

// exports.getRoute = (req, res) => {
//   const { start, end } = req.query;

//   const result = graph.dijkstra(start, end);

//   // 🔥 emit realtime update
//   sendRouteUpdate({
//     start,
//     end,
//     ...result
//   });

//   res.json(result);
// };


// // const Graph = require("../dsa/Graph");

// // const graph = new Graph();

// // // sample map
// // ["A", "B", "C", "D", "E"].forEach(n => graph.addNode(n));

// // graph.addEdge("A", "B", 5);
// // graph.addEdge("A", "C", 2);
// // graph.addEdge("B", "D", 1);
// // graph.addEdge("C", "D", 7);
// // graph.addEdge("D", "E", 3);

// // exports.getRoute = (req, res) => {
// //   const { start, end } = req.query;
// //   const result = graph.dijkstra(start, end);
// //   res.json(result);
// // };
class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = [];
  }

  addEdge(src, dest, weight) {
    this.nodes[src].push({ node: dest, weight });
    this.nodes[dest].push({ node: src, weight });
  }

  dijkstra(start, end) {
    const distances = {};
    const prev = {};
    const pq = [];

    for (let node in this.nodes) {
      distances[node] = Infinity;
      prev[node] = null;
    }

    distances[start] = 0;
    pq.push({ node: start, dist: 0 });

    while (pq.length) {
      pq.sort((a, b) => a.dist - b.dist);
      const { node } = pq.shift();

      for (let neighbor of this.nodes[node]) {
        let alt = distances[node] + neighbor.weight;

        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt;
          prev[neighbor.node] = node;
          pq.push({ node: neighbor.node, dist: alt });
        }
      }
    }

    let path = [];
    let curr = end;

    while (curr) {
      path.unshift(curr);
      curr = prev[curr];
    }

    return { path, distance: distances[end] };
  }
}

module.exports = Graph;


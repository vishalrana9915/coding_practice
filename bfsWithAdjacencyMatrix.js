/**
 * Traversing through the graph
 * @param {*} graph , graph matrix
 * @param {*} rootNode , root node to start from
 */
const bfs = (graph, rootNode) => {
  // storing distance to the root node
  let nodeDistance = {};
  // start all distance from infinity
  for (let i = 0; i < graph.length; i++) {
    nodeDistance[i] = Infinity;
  }

  // distance from root node to root node is 0
  nodeDistance[rootNode] = 0;

  // creating a queue to keep track of nodes to visit
  let queue = [rootNode];

  // iterate while we have nodes in queue
  while (queue.length) {
    const currentNode = queue.shift();

    //get all the nodes connected to current node
    const currentConnectedNodes = graph[currentNode];
    let neighborIdx = [];
    currentConnectedNodes.forEach((element, idx) => {
      if (element == 1) {
        neighborIdx.push(idx);
      }
    });

    // finding the distance
    for (let i = 0; i < neighborIdx.length; i++) {
      if (nodeDistance[neighborIdx[i]] === Infinity) {
        // value is not set as per now
        nodeDistance[neighborIdx[i]] = nodeDistance[currentNode] + 1;
        queue.push(neighborIdx[i]);
      }
    }
  }

  return nodeDistance;
};

// example for bfs algo
// DJcency matrix graph
// nxn -> represent n, numbe of vertices

// const exBFSGraph = [
//   [0, 1, 1, 1, 0],
//   [0, 0, 1, 0, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0],
// ];

const newbfsGraph = [
  [0, 1, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
  [1, 0, 0, 0],
];

console.log(bfs(newbfsGraph, 1));

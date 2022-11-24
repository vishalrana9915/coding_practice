/**
 * Traversing through the graph
 * @param {*} graph , graph matrix
 * @param {*} rootNode , root node to start from
 */
const dfs = (graph, rootNode) => {
  // storing distance to the root node
  let nodeDistance = {};
  // start all distance from infinity
  for (let i = 0; i < graph.length; i++) {
    nodeDistance[i] = Infinity;
  }

  // distance from root node to root node is 0
  nodeDistance[rootNode] = 0;

  // creating a stack to keep track of nodes to visit later
  let stack = [rootNode];

  // setting the current vertex as visited as we don;t want to create a loop around it
  let visitedNodes = { [rootNode]: true };

  // iterate while we have vertex in stack
  while (stack.length) {
    // taking the current value in the stack that needs to be processed
    const currentNode = stack.pop();
    // checking if unvisited nodes are there or not
    const unvisitedNode = findUnVisitedNode(currentNode, graph, visitedNodes);
    // checking is any unvisited vertex exist for this current vertex or not
    if (unvisitedNode >= 0) {
      if (!visitedNodes[unvisitedNode]) {
        // value is not set as per now
        if (nodeDistance[unvisitedNode] == Infinity)
          nodeDistance[unvisitedNode] = nodeDistance[currentNode] + 1;
        visitedNodes[unvisitedNode] = true;
        // if a vertex is unvisited then we need to push the current vertex as well
        // as the next vertex that we need to explore
        stack.push(...[currentNode, unvisitedNode]);
      }
    } else {
      // if all vertices are visited then we don;t have to add any value in stack
      visitedNodes[unvisitedNode] = true;
    }
  }

  return nodeDistance;
};

/**
 * Function to check if any unvisited neighour vertex exist for current vertex
 * @param {*} currentNode , current node(vertex) that is being processed
 * @param {*} graph , graph, the adjacency matrix representation
 * @param {*} visitedNodes , Hashmap for vertex that are already been visited
 * @returns
 */
const findUnVisitedNode = (currentNode, graph, visitedNodes) => {
  const currentConnectedNodes = graph[currentNode]; //current connected vertex for this current vertex
  let neighborIdx = -1; // making it initial to -1, as no vertex is unvisited
  currentConnectedNodes.forEach((element, idx) => {
    // finding the first neighour unvisited vertex
    if (element == 1 && !visitedNodes[idx] && neighborIdx == -1) {
      neighborIdx = idx;
    }
  });
  return neighborIdx;
};

const newdfsGraph = [
  [0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

console.log(dfs(newdfsGraph, 1));

// take a processing node
// check its childrend, if any unvisited exist , push to stack, check its connecting childrens

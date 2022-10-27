/**
 * Function to fetch the closest neibhour node to process after current node
 * @param {*} currentNodeNeibhour , all neibhour nodes object
 * @param {*} visitedNodes, all the visited nodes for the graph
 * @returns Closed node
 */
const fetchClosestNode = (currentNodeNeibhour, visitedNodes) => {
  let closestNode = null;

  // iterating throught the list of neibhours of current node to fetch nearest one
  for (let node in currentNodeNeibhour) {
    // checking if the current node is the closest or not and also checking if that node is visited before or not
    if (
      (!closestNode ||
        currentNodeNeibhour[node] < currentNodeNeibhour[closestNode]) &&
      !visitedNodes.includes(node)
    ) {
      closestNode = node;
    }
  }
  return closestNode;
};

/**
 * Function to fetch the shorted path that we can take to reach from start to end
 * @param {*} sourceNode , source node to start the journey
 * @param {*} endNode , end node to stop the journey
 * @param {*} graph , adjacency list representation of grah with weighted edges
 * @returns Shorted path weight
 */
const findShortedPath = (sourceNode, endNode, graph) => {
  let distances = {};
  // setting the default distance for destination to Infinity as it will be always greater, easy to compare
  distances[endNode] = Infinity;
  // setting the distance for neighour nodes
  distances = Object.assign(distances, graph[sourceNode]);

  // need to keep track of the visited nodes as well so that we don;t create a loop
  let visitedNodes = [];

  // fetch the nearest node
  let nearestNode = fetchClosestNode(distances, visitedNodes);
  // create a while loop to fetch the iterate over the neighous and calculate distance
  while (nearestNode) {
    const distance = distances[nearestNode];
    const neighbours = graph[nearestNode];
    // calculate the distance for the neighour node
    // iterate through neibhours
    for (let neibhour in neighbours) {
      // checking if neighbour is not starting vlaue so that we don;t keep in loop
      if (String(neibhour) === String(sourceNode)) {
        continue;
      } else {
        // calculating the new Distance for the neibhour node
        let newDistance = distance + neighbours[neibhour];
        // if new distance is small update it
        if (!distances[neibhour] || newDistance < distances[neibhour]) {
          distances[neibhour] = newDistance;
        }
      }
    }

    // mark the current node as visited
    visitedNodes.push(nearestNode);
    // calculating the next smallest node to visit from the unvisited nodes
    nearestNode = fetchClosestNode(distances, visitedNodes);
  }

  return distances[endNode];
};

// creating a adjacency list
const adjacencyList = {
  a: { b: 10, c: 5 },
  b: { d: 1 },
  c: { e: 2, b: 3, d: 9 },
  d: {},
  e: { a: 2, d: 6 },
};

// console.log(fetchClosestNode({ e: 2, d: 9, b: 3 }, ["e"]));

console.log(findShortedPath("a", "d", adjacencyList));

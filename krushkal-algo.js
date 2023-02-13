// Minimum spanning tree consist of all the vertices connected through minimum vertices

/**
 * Function to calculated minimum spanning tree from given adjacency list
 * @param {*} graph, undirected graph to fetch minial edges to connect all vertices
 * @returns Minimum spanning tree
 */
const minimumTree = (graph) => {
  let createdWeights = [];

  // need to create a linera ds to store all edges connect with sorted graphs
  for (let i in graph) {
    let currentNode = graph[i];
    let keys = Object.keys(currentNode);
    for (let j = 0; j < keys.length; j++)
      createdWeights.push({
        startVertices: i,
        endVertices: keys[j],
        weight: currentNode[keys[j]],
      });
  }

  createdWeights = createdWeights.sort((a, b) => {
    if (a.weight < b.weight) {
      return -1;
    }
    return 0;
  });
  // now we have all the vertices with weight in sorted order
  console.log({ createdWeights });

  // need to iterate and check if they belong to same component or not in order to eliminated loop
  // for n vertices we'll have n-1 edges
};

/**
 * An Example of Tree we are using, tree is unDirected
 *              3
 *        (b) ----- (e)
 *    1 /  |  \ 1/   |  \ 3
 * (a)    3|    /\   |2   (f)
 *    2 \  |  / 1  \ |  / 4
 *        (c) ----- (d)
 *              2
 */
const adjacencyList = {
  a: { b: 1, c: 2 },
  b: { c: 3, e: 3, d: 1, a: 1 },
  c: { a: 1, b: 3, e: 1, d: 2 },
  e: { f: 3, d: 2, c: 1, b: 3 },
  d: { c: 2, b: 1, e: 2, f: 4 },
  f: { e: 3, d: 4 },
};
console.log(minimumTree(adjacencyList));

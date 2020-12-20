import Dijkstra from './utils/Dijkstra.js';

const dijkstra = new Dijkstra();

dijkstra.addVertex('a');
dijkstra.addVertex('c');
dijkstra.addEdge('a', 'b', 5);
dijkstra.addEdge('b', 'c', 1);
dijkstra.addEdge('a', 'd', 7);

console.log(dijkstra.findShortestPath('a', 'c'));

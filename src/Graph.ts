import {isNull} from 'util';

export class Node {
  val: string;
  priority: number;

  constructor(val = '', priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

type Vertex = keyof WeightedGraph['adjacencyList'];

type PreviousList = {[key: Vertex]: string | null};

type Distances = {[key: Vertex]: number};

export class PriorityQueue {
  values: Node[] = [];

  enqueue(val = '', priority: number) {
    this.values.push(new Node(val, priority));
    this.sort();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.values.shift();
  }
}

const generatePathFromPreviousList = (
  start: string,
  finish: string,
  previous: PreviousList
) => {
  const path: string[] = [];
  let current = finish;
  while (previous[current]) {
    path.push(current);
    current = previous[current] as string;
  }

  return path.concat(start).reverse();
};

export class WeightedGraph {
  adjacencyList: {[key: string]: {vertex: string; weight: number}[]} = {};

  addVertex(vertex: string) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList[vertex1].push({vertex: vertex2, weight});
    this.adjacencyList[vertex2].push({vertex: vertex1, weight});
  }

  getShortestPath(start: string, finish: string) {
    const prioityQueue = new PriorityQueue();

    const distances = Object.keys(this.adjacencyList).reduce<Distances>(
      (obj, vertex) => {
        const distance = vertex === start ? 0 : Infinity;
        obj[vertex] = distance;
        prioityQueue.enqueue(vertex, distance);
        return obj;
      },
      {}
    );

    const previous = Object.keys(this.adjacencyList).reduce<PreviousList>(
      (obj, vertex) => {
        obj[vertex] = null;
        return obj;
      },
      {}
    );

    while (prioityQueue.values.length) {
      const {val: vertex} = prioityQueue.dequeue() as Node;

      if (vertex === finish) {
        return generatePathFromPreviousList(start, finish, previous);
      } else {
        this.adjacencyList[vertex].forEach(nextNode => {
          let distance = distances[vertex] + nextNode.weight;
          if (distance < distances[nextNode.vertex]) {
            distances[nextNode.vertex] = distance;
            previous[nextNode.vertex] = vertex;
            prioityQueue.enqueue(nextNode.vertex, distance);
          }
        });
      }
    }

    return false;
  }
}

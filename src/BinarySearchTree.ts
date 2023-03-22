import {notEqual} from 'assert';

// Node class
class Node {
  data: number;
  left?: Node;
  right?: Node;

  constructor(data: number) {
    this.data = data;
  }
}

export class BinarySearchTree {
  private root?: Node;

  constructor() {}

  insert(data: number) {
    var newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: Node, newNode: Node) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  BFS() {
    let queue = [this.root];
    let result = [];

    while (queue.length) {
      let node = queue.shift();

      if (node) result.push(node.data);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }

    return result;
  }

  DPSPreOrder() {
    const result = [];

    (function traverse(node: Node | undefined) {
      if (node) {
        result.push(node.data);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
    })(this.root);

    return result;
  }

  DPSPostOrder() {
    const result = [];

    (function traverse(node: Node | undefined) {
      if (node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        result.push(node.data);
      }
    })(this.root);

    return result;
  }

  DPSInOrder() {
    const result = [];

    (function traverse(node: Node | undefined) {
      if (node) {
        if (node.left) traverse(node.left);
        result.push(node.data);
        if (node.right) traverse(node.right);
      }
    })(this.root);

    return result;
  }
}

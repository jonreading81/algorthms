import {BinarySearchTree} from './BinarySearchTree';

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

test('should provide bfs', () => {
  expect(tree.BFS()).toEqual([10, 6, 15, 3, 8, 20]);
});

test('should provide dfs preorder', () => {
  expect(tree.DPSPreOrder()).toEqual([10, 6, 3, 8, 15, 20]);
});

test('should provide dfs preorder', () => {
  expect(tree.DPSPostOrder()).toEqual([3, 8, 6, 20, 15, 10]);
});

test('should provide dfs inorder', () => {
  expect(tree.DPSInOrder()).toEqual([3, 6, 8, 10, 15, 20]);
});

const BinarySearchTree = require('./BST')

//3.Create a BST class

const BST = new BinarySearchTree();
BST.insert(3)
BST.insert(1)
BST.insert(4)
BST.insert(6)
BST.insert(9)
BST.insert(2)
BST.insert(5)
BST.insert(7)
console.log(BST)

const BST2 = new BinarySearchTree();
const insertChars = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N']

insertChars.forEach(char => BST2.insert(char));

// console.log(BST2)


//4.

// It's returning the sum of the entire tree. 
// This has a linear time complexity O(n)

//5.
function treeHeight(node) {
  //memoize?
  if (node === null) {
    return -1
  }
  let lefth = treeHeight(node.left) + 1
  let righth = treeHeight(node.right) + 1

  // console.log('one level')

  return lefth > righth ? lefth : righth;
}

// console.log(treeHeight(BST))

//6
function isBST(node) {

  if (!node) {
    return true
  }

  if (node.left === null || node.right == null) {
    return true
  }

  if (node.left.key > node.right.key) {
    return false;
  }

  return isBST(node.left) && isBST(node.right)
}

// console.log('BST:', isBST(BST))

// const ABT = new BinarySearchTree();
// ABT.root = 50
// ABT.left = new BinarySearchTree(8);
// ABT.right = new BinarySearchTree(2);
// ABT.left.left = new BinarySearchTree(3);
// ABT.left.right = new BinarySearchTree(5);
// ABT.right.right = new BinarySearchTree(30);
// ABT.right.left = new BinarySearchTree(1);

// console.log('ABT:', isBST(ABT))

//7.
//find the 3rd largest node
function third(node){
  if(!node.right){
    return node
  }
  //go all the way right, then up  2
  while(node.right !== null){
    node = node.right
  }
  //current node will be the largest
  //go up twice
  return node.parent.key
}

// console.log(third(BST))

//8.
function isBalanced(root) {
  if (root === null) {
    return true
  }
  let lefth = treeHeight(root.left)
  let righth = treeHeight(root.right)
  if ((Math.abs(lefth - righth) <= 1) && isBalanced(root.left) === true && isBalanced(root.right) === true) {
    return true
  }
  return false
}

console.log(isBalanced(BST))

//9. Same BST?
function twinsies(tree1, tree2){
  const array1 = generate(tree1)
  const array2 = generate(tree2)

  function generate(tree) {
    const temp = []
    
    for(let i = 0; i < tree.length; i++) {
      if(temp.length === 0) {
        temp.push(`${tree[i]}root`)
      }
      else if (tree[i] > tree)
    }

    return temp
  }

  //['3root',"5r1", "4l1", "6r2", "1r2", "0l2", "2r2"]
  // ['3root','1l1','5r1','2r2','4r2','6r3',"0l3"]
}

// console.log(twinsies([3, 5, 4, 6, 1, 0, 2 ], [3, 1, 5, 2, 4, 6, 0]))

const test = ['3root',"5r", "4l", "6rr", "1l", "0l", "2r"]
console.log(test.sort())
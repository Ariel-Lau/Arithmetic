
function BinaryTreeNode(value) {
    this.value = value;
    this.parentNode = null;
    this.leftChild = null;
    this.rightChild = null;

    BinaryTreeNode.prototype.setParentNode = function (parentNode) {
        this.parentNode = parentNode;
        return this;
    }

    BinaryTreeNode.prototype.setLeftChild = function (leftChild) {
        this.leftChild = leftChild;
        return this;
    }

    BinaryTreeNode.prototype.setRightChild = function (rightChild) {
        this.rightChild = rightChild;
        return this;
    }

    BinaryTreeNode.prototype.toString = function () {
        return this.value;
    }
}


var _1 = new BinaryTreeNode(1);
var _2 = new BinaryTreeNode(2)
var _3 = new BinaryTreeNode(3)
var _4 = new BinaryTreeNode(4)
var _5 = new BinaryTreeNode(5)
var _6 = new BinaryTreeNode(6)
var _7 = new BinaryTreeNode(7)
var _8 = new BinaryTreeNode(8)
var _9 = new BinaryTreeNode(9)
var _10 = new BinaryTreeNode(10)
var _11 = new BinaryTreeNode(11)

_1.setLeftChild(_2).setRightChild(_3);
_2.setParentNode(_1).setLeftChild(_4).setRightChild(_5);
_3.setParentNode(_1).setLeftChild(_6).setRightChild(_7);
_4.setParentNode(_2).setLeftChild(_8).setRightChild(_9);
_5.setParentNode(_2).setLeftChild(_10).setRightChild(_11);
_6.setParentNode(_3);
_7.setParentNode(_3);
_8.setParentNode(_4);
_9.setParentNode(_4);
_10.setParentNode(_5);
_11.setParentNode(_5);

function preOrderIterateTree(parentNode) {
    console.log(`${parentNode}`);

    if (parentNode.leftChild) {
        preOrderIterateTree(parentNode.leftChild);
    }

    if (parentNode.rightChild) {
        preOrderIterateTree(parentNode.rightChild);
    }
}


function midOrderIterateTree(parentNode) {
    if (parentNode.leftChild) {
        midOrderIterateTree(parentNode.leftChild);
    }

    console.log(`${parentNode}`);

    if (parentNode.rightChild) {
        midOrderIterateTree(parentNode.rightChild);
    }
}

function postOrderIterateTree(parentNode) {
    if (parentNode.leftChild) {
        postOrderIterateTree(parentNode.leftChild);
    }

    if (parentNode.rightChild) {
        postOrderIterateTree(parentNode.rightChild);
    }

    console.log(`${parentNode}`);
}

// console.log('pre order');
// preOrderIterateTree(_1);
// console.log('mid order');
// midOrderIterateTree(_1);
// console.log('post order');
// postOrderIterateTree(_1);


function forPre(node) {
    var stack = [];
    if (!node) {
        return;
    }

    var tempNode = node;
    // stack.push(node);

    while (tempNode) {
        stack.push(tempNode);
        console.log(`${tempNode}`);

        if (tempNode.leftChild) {
            tempNode = tempNode.leftChild;
            continue;
        }

        if (tempNode.rightChild) {
            tempNode = tempNode.rightChild;
            continue;
        }

        tempNode = stack.pop();

        if (tempNode == tempNode.parentNode.leftChild) {
            if (tempNode.parentNode.rightChild) {
                tempNode = tempNode.parentNode.rightChild;
            }
            continue
        }


        while (tempNode && tempNode.parentNode && tempNode.parentNode.rightChild && tempNode == tempNode.parentNode.rightChild) {
            tempNode = stack.pop();
        }
        
        if (stack.length == 0) {
            tempNode = null;
        }

        if (tempNode && tempNode.parentNode && tempNode.parentNode.rightChild) {
            tempNode = tempNode.parentNode.rightChild;
        }
    }
}

forPre(_1);
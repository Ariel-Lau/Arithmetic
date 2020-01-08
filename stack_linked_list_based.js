function StackLinkedListBased(node) {
    this.node = node;
    this.head = null;

    StackLinkedListBased.prototype.push = function (node) {
        if (this.head) {
            var originHead = this.head;
            this.head = node;
            this.head.nextNode = originHead;
        } else {
            this.head = node;
        }
        console.log(`push ${node} into`);
        console.log('container: ' + this.toString())
    };

    StackLinkedListBased.prototype.pop = function () {
        if (this.head) {
            var popEle = this.head;
            this.head = this.head.nextNode;
            console.log(`pop ${popEle}`);
            console.log('container: ' + this.toString())
            return popEle;
        } else {
            throw new Error('stack is empty');
        }
    };

    StackLinkedListBased.prototype.toString = function () {
        var tempHead = this.head;
        var ret = '';
        while (tempHead) {
            ret += tempHead.name + '->';
            tempHead = tempHead.nextNode;
        }
        return ret;
    };
}

function Node(name, nextNode) {
    this.name = name;
    this.nextNode = nextNode;

    Node.prototype.toString = function () {
        return 'name:' + this.name + ', nextNode:' + this.nextNode;
    };
}
var stack = new StackLinkedListBased(null);

var aNode = new Node('mm', null);
var bNode = new Node('yy', null);
var cNode = new Node('aa', null);

stack.push(aNode);
// console.log(stack.toString());
stack.push(bNode);
stack.pop();
stack.pop();
stack.push(cNode);
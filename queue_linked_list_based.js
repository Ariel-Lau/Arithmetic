function Queue() {
    this.head = null;
    this.tail = null;
    Queue.prototype.enQueue = function (node) {
        var tmpHead = this.head;
        if (tmpHead) {
            this.head = node;
            this.head.nextNode = tmpHead;
            tmpHead.lastNode = this.head;
        } else {
            this.head = node;
            this.tail = node;
        }
        console.log(`enQueue: ${node}`);
        console.log('container: ' + this.toString());
    };

    Queue.prototype.deQueue = function () {
        var tmpDeQue = this.tail;
        if (tmpDeQue) {
            this.tail = tmpDeQue.lastNode;
            tmpDeQue.lastNode = null;
            this.tail.nextNode = null;
            console.log(`deQueue ${tmpDeQue}`);
            console.log('container: ' + this.toString());
            return tmpDeQue;
        } else {
            throw new Error('queue is empty');
        }
    };

    Queue.prototype.toString = function(){
        var tmpNode = this.head;
        var res = '';
        while(tmpNode) {
            res = res + '->' + tmpNode.toString();
            tmpNode = tmpNode.nextNode;
        }
        return res;
    }
}

function Node(name, lastNode, nextNode) {
    this.name = name;
    this.lastNode = lastNode;
    this.nextNode = nextNode;
    Node.prototype.toString = function () {
        return 'name:' + this.name + ', lastNode:' + (this.lastNode && this.lastNode.name) +  ', nextNode:' + (this.lastNode && this.lastNode.name);
    };
}

var anode = new Node('mm', null,  null);
var bnode = new Node('vv', null ,null);

var queue = new Queue();

queue.enQueue(anode);
queue.enQueue(bnode);
console.log(queue.deQueue());
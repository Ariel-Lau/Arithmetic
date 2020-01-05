function Stack(size) {
    this.container = [];
    this.size = size;

    Stack.prototype.push = function (ele) {
        if (this.container.length >= this.size) {
            throw new Error('stack is full');
        }

        console.info(`push ${ele} into container`);
        this.container[this.container.length++] = ele;
        console.log(`container ele ${this.container}`);
        // this.container.push(ele);
    };

    Stack.prototype.pop = function () {
        if (this.container.length <= 0) {
            throw new Error("stack is empty");
        }
        // var popEle = this.container.pop()
        var popEle = this.container[this.container.length - 1];
        this.container.splice(this.container.length - 1, 1);
        console.info(`pop ${popEle} out of container`);
        console.log(`container ele ${this.container}`);
        return popEle;
    };

    Stack.prototype.toString = function () {
        return this.container;
    };

    Stack.prototype.size = function () {
        return this.size;
    };
}


var stack = new Stack(10);

stack.push('a');
stack.push('b');
stack.pop();
stack.push('c');
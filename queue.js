function Queue(size) {
    this.container = [];
    this.size = size;
    this.point = this.size - 1;

    Queue.prototype.shift = function (ele) {
        if (this.point < 0) {
            throw new Error('queue is full');
        }

        this.container[this.point] = ele;
        this.point--;
        console.info(`shift ${ele} into container ${this.container}`);
    };

    Queue.prototype.unshift = function () {
        if (this.point > this.size - 1) {
            throw new Error('queue is empty');
        }

        var ele = this.container[this.size - 1];

        for (var i = this.size - 2; i >= this.point; i--) {
            this.container[i + 1] = this.container[i];
        }
        this.point++;
        console.info(`unshift ${ele} out of container ${this.container}`);
        return ele;
    };
}

var q = new Queue(5);
q.shift(1);
q.shift(2);
q.unshift();
q.shift(3);
q.shift(4);
q.shift(5);
q.shift(6);
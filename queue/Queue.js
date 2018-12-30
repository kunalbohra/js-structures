class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(value) {
    this.storage.push(value);
  }
  dequeue() {
    return this.storage.shift();
  }
}
module.exports = Queue;

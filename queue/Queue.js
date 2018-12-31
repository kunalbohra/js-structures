const EmptyQueueException = require('../exceptions/EmptyQueueuException');
class Queue {
  constructor() {
    this.storage = [];
  }

  get size() {
    return this.storage.length;
  }

  enqueue(value) {
    this.storage.push(value);
  }
  dequeue() {
    if (!this.storage.length) {
      throw new EmptyQueueException('dequeue called on empty Queue');
    }
    return this.storage.shift();
  }
}
module.exports = Queue;

const EmptyStackException = require('../exceptions/EmptyStackException');
class Stack {
  constructor() {
    this.storage = [];
  }

  get size() {
    return this.storage.length;
  }

  push(value) {
    this.storage.push(value);
  }

  pop() {
    if (!this.storage.length) {
      throw new EmptyStackException('pop called on empty stack');
    }
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.size - 1];
  }
}
module.exports = Stack;

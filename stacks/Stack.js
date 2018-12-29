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
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.size - 1];
  }
}
module.exports = Stack;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  setNext(node) {
    this.next = node;
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node;
    this.addToHead = this.addToHead.bind(this);
    this.removeFromHead = this.removeFromHead.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  addToHead(value) {
    const node = new Node(value);
    node.setNext(this.head);
    this.head = node;
  }

  isEmpty() {
    return this.head === null;
  }

  removeFromHead() {
    const poppedValue = this.head.value;
    this.head = this.head.next;
    return poppedValue;
  }
}

module.exports = { LinkedList };

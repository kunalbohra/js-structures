const { LinkedList } = require('../LinkedList');

class MaxLinkedList extends LinkedList {
  constructor() {
    super();
    this.maximum = null;
  }

  addToHead(value) {
    if (this.maximum == null) {
      this.maximum = value;
    } else {
      if (this.maximum < value) {
        this.maximum = value;
      }
    }
    super.addToHead(value);
  }

  get max() {
    return this.maximum;
  }
}

module.exports = MaxLinkedList;

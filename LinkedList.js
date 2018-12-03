class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  
  setNext(node) {
   // const newNode = new Node(value);
    this.next = node;
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node;
  }
  
  addToHead(value) {
    const node = new Node(value);
    const headNext = this.head ? this.head.next : null;
    node.setNext(this.head);
    this.head = node;
    //this.head.next = headNext;
  }
}

const list = new LinkedList();

list.addToHead(1);
list.addToHead(2);
list.addToHead(3)

console.log(JSON.stringify(list, null, 2))
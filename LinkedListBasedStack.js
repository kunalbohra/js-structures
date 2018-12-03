class Stack {
  constructor() {
    this.storage = new LinkedList();
  }
  
  push(value) {
    this.storage.addToHead(value);
  }
  
  pop() {
    return this.storage.removeFromHead();
  }
}


const data = ['to', 'be', 'or', 'not', 'to', '-', 'be', '-', '-']
const stack = new Stack();

console.log(data.reduce((acc, curr) => {
  if(curr === '-') {
    acc.push(stack.pop())
  } else {
    stack.push(curr)
  }
  
  return acc;
}, []));


console.log(JSON.stringify(stack, null, 2));

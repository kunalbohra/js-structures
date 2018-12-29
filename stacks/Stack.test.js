const Stack = require('./Stack');

describe('tests for Stack', () => {
  test('Stack supports push and pop operations in LIFO order', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.size).toBe(2);
  });

  test('Stack size works as expected', () => {
    const stack = new Stack();
    [1, 2, 3, 4, 5].forEach(stack.push, stack);
    expect(stack.size).toBe(5);
  });

  test('peek returns the top of the stack without altering the size of stack', () => {
    const stack = new Stack();
    [1, 2, 3, 4, 5].forEach(stack.push, stack);
    expect(stack.peek()).toBe(5);
    expect(stack.size).toBe(5);
  });
});

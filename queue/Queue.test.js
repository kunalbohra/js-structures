const Queue = require('./Queue');

describe('Queue tests', () => {
  test('supports enqueue and dequeue operations', () => {
    const q = new Queue();
    [1, 2, 3, 4, 5].forEach(q.enqueue, q);
    expect(q.dequeue()).toBe(1);
  });
});

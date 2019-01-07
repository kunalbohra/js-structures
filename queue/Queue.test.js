const Queue = require('./Queue');

describe('Queue tests', () => {
  test('supports enqueue and dequeue operations', () => {
    const q = new Queue();
    [1, 2, 3, 4, 5].forEach(q.enqueue, q);
    expect(q.dequeue()).toBe(1);
  });

  test('invoking dequeue on empty Queue throws EmptyQueueException', () => {
    const q = new Queue();
    try {
      q.dequeue();
    } catch (err) {
      expect(err.message).toBe('dequeue called on empty Queue');
    }
  });

  test('size returns the # of items in the queue', () => {
    const q = new Queue();
    [1, 2, 3, 4, 4].forEach(q.enqueue, q);
    expect(q.size).toBe(5);
  });
});

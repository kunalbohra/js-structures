const { LinkedList } = require('./LinkedList');

describe('LinkedList tests', () => {
  const values = [1, 2, 3, 4, 5];
  const list = new LinkedList();

  values.forEach(list.addToHead);

  test('head.value is 5', () => {
    expect(list.head.value).toBe(5);
    expect(list.isEmpty()).toEqual(false);
  });

  test('expect removeFromHead returns 5', () => {
    expect(list.removeFromHead()).toEqual(5);
  });

  test('isEmpty works as expected', () => {
    const list = new LinkedList();
    expect(list.isEmpty()).toBe(true);
    list.addToHead(1);
    expect(list.isEmpty()).toBe(false);
  });

  test('LinkedList is an iterable', () => {
    const list = new LinkedList();

    [1, 2, 3, 4, 5].forEach(list.addToHead);
    expect([...list]).toEqual([5, 4, 3, 2, 1]);
  });
});

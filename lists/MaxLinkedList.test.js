const MaxLinkedList = require('./MaxLinkedList');

describe('test MaxLinkedList behavior', () => {
  test('max returns the correct item', () => {
    const list = new MaxLinkedList();

    [1, 7, 4, 9, 2, 3].forEach(list.addToHead);

    expect(list.max).toBe(9);
  });
});

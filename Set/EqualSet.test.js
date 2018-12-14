const EqualSet = require('./EqualSet');

describe('tests for EqualSet behavior', () => {
  test('objects with specified compared properties are not added as duplicates', () => {
    const eq = new EqualSet('a', 'b', 'c');
    eq.add({ a: 1, b: 2, c: 3 });
    eq.add({ a: 1, b: 2, c: 3 });
    eq.add({ a: 2, b: 1 });

    eq.add([1, 2, 3, 4, 5]);
    eq.add([1, 2, 3, 4, 5]);
    eq.add([5, 6, 7, 8, 9]);

    eq.add({ a: 5, b: 6 });

    expect(eq.size).toBe(5);
  });

  test('has works as expected', () => {
    const eq = new EqualSet('a', 'b');
    const obj = { a: 1, b: 2 };
    eq.add(obj);
    expect(eq.has({ a: 1, b: 2 })).toBe(true);
    expect(eq.has({ a: 2, b: 1 })).toBe(false);
  });

  test('delete removes correct item', () => {
    const eq = new EqualSet('a', 'b');
    const obj1 = { a: 1 };
    eq.add(obj1);
    const obj2 = { a: 1, b: 2 };
    eq.add(obj2);
    expect(eq.size).toBe(2);
    expect(eq.delete(obj1)).toBe(true);
    expect(eq.size).toBe(1);
    expect(eq.has(obj2)).toBe(true);
  });
});

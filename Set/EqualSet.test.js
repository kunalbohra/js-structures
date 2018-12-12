const EqualSet = require('./EqualSet');

describe('tests for EqualSet behavior', () => {
  test('objects with specified compared properties are not added as duplicates', () => {
    const eq = new EqualSet('a', 'b', 'c');
    eq.add({ a: 1, b: 2, c: 3 });
    eq.add({ a: 1, b: 2, c: 3 });
    eq.add({ a: 2, b: 1 });

    eq.add({ a: 5, b: 6 });

    expect(eq.size).toBe(3);
  });

  test('has works as expected', () => {
    const eq = new EqualSet('a', 'b');
    const obj = { a: 1, b: 2 };
    eq.add(obj);
    expect(eq.has({ a: 1, b: 2 })).toBe(true);
    expect(eq.has({ a: 2, b: 1 })).toBe(false);
  });
});

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
});

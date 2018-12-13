/**
 * native JS Set allows objects with similar shape and props/values to be inserted.
 * EqualSet (currently only works for numeric values) ignores subsequent addition of object where keys and values are the same
 * based on compareProps
 * see tests for example usage
 */

class EqualSet extends Set {
  constructor(...compareProps) {
    super();
    this.compareProps = compareProps;
  }

  add(value) {
    if (typeof value !== 'object') {
      super.add(value);
    } else {
      if (!this.hasValue(value)) {
        //check if a "similar" object exists in the set, if not add it
        super.add(value);
      }
    }
  }

  hasValue(value) {
    return Array.from(this.values()).some(obj => {
      return (
        EqualSet.hash(obj, ...this.compareProps) ===
        EqualSet.hash(value, ...this.compareProps)
      );
    });
  }

  has(value) {
    const valueHash = EqualSet.hash(value, ...this.compareProps);

    return Array.from(this.values()).some(
      obj => EqualSet.hash(obj, ...this.compareProps) === valueHash
    ); //check if there are any objects in the set with the same hash as the value object
  }

  static hash(obj, ...props) {
    const prime = 31;
    let hash = 1;
    return props.reduce((accum, curr) => {
      accum = accum * prime + (obj[curr] || 0);
      return accum;
    }, hash);
  }
}

module.exports = EqualSet;

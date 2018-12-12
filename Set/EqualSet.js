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
      const objectValues = Array.from(this.values()).filter(obj => {
        return typeof obj === 'object';
      });
      if (objectValues.length < 1) {
        super.add(value);
      } else {
        const hasDups = objectValues.some(obj => {
          return (
            EqualSet.hash(obj, ...this.compareProps) ===
            EqualSet.hash(value, ...this.compareProps)
          );
        });
        if (!hasDups) {
          super.add(value);
        }
      }
    }
  }

  has(value) {
    if (typeof value !== 'object') {
      //this could probably be removed, EqualSet would just be an overhead if values are primitive types
      return super.has(value);
    } else {
      const valueHash = EqualSet.hash(value, ...this.compareProps);

      return Array.from(this.values()).some(
        obj => EqualSet.hash(obj, ...this.compareProps) === valueHash
      ); //check if there are any objects in the
    }
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

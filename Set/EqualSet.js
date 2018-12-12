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

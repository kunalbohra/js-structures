const ohash = require('object-hash');

/**
 * native JS Set allows objects with similar shape and props/values to be inserted.
 * EqualSet ignores subsequent addition of object where keys and values are the same
 * see tests for example usage
 */

class EqualSet extends Set {
  constructor(...compareProps) {
    super();
    this.compareProps = compareProps;
    this.valuesHash = new Map();
  }

  add(value) {
    if (!this.valuesHash.has(ohash(value))) {
      //check if a "similar" object exists in the set, if not add it
      this.valuesHash.set(ohash(value), value);
      super.add(value);
    }
    return this;
  }

  delete(value) {
    return this.has(value) ? super.delete(value) : false;
  }

  has(value) {
    return this.valuesHash.has(ohash(value));
  }
}

module.exports = EqualSet;

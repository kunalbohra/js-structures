class EmptyStackException extends Error {
  constructor(message) {
    super(message);
    this.name = 'EmptyStackException';
  }
}
module.exports = EmptyStackException;

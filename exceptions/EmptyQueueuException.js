class EmptyQueueException extends Error {
  constructor(message) {
    super(message);
    this.name = 'EmptyQueueException';
  }
}
module.exports = EmptyQueueException;

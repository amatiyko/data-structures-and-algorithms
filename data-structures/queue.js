/**
 * Queue is a collection in which the entities in the collection are kept
 * in order with first-in-first-out principle. Operations on the collection:
 * 1. enqueue - the addition of elements to the rear terminal position
 * 2. dequeue - the removal of elements from the front terminal position
 */
class Queue {
  /**
   * New queue initialization
   * The initial value of the queue is an empty array
   */
  constructor() {
    this.queue = [];
  }

  /**
   * adds an element to the collection
   * @param data - queue element
   */
  enqueue = data => this.queue.push(data);

  /**
   *  remove the first added element
   * @returns removed element
   */
  dequeue = () => this.queue.shift()
}

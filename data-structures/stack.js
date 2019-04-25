/**
 * Stack structure implementation
 * Stack is an abstract data type that serves as a collection of elements,
 * with two principal operations:
 * 1. push, which adds an element to the collection, and
 * 2. pop, which removes the most recently added element that was not yet removed.
*/
class Stack {
  /**
   * New stack initialization
   * The initial value of the stack is an empty array
   */
  constructor() {
     this.stack = [];
  }

  /**
   * adds an element to the collection
   * @param data - stack element
   */
  push = data => this.stack.push(data);

  /**
   *  remove the most recently added element
   * @returns removed element
   */
  pop = () => this.stack.pop();
}

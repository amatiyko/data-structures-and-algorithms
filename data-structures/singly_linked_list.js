class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Linked list is a linear collection of data elements,
 * whose order is not given by their physical placement in memory. 
 * Instead, each element points to the next.
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  };

  /** 
   * add new node to the end ao the list
   * @param {*} data - new node data
   */
  addNode = data => {
    // create new node
    const newNode = new Node(data);

    // if there is no head node,
    // that new node is going to be the head node
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      // we need to find the tail node, which has null next node
      // so that our new node will become its next node
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      // when current node is one without next
      // save new node to its next
      currentNode.next = newNode;
    }
    this.length++;
  };

  /**
   * search and remove node By data
   * @param {*} data 
   */
  removeNode(data) {
    // declare current node as head; previous is null for head node
    let currentNode = this.head;
    let previousNode = null;

    // search for node to delete while we have current node
    while (currentNode) {
      if (currentNode.data === data) {
        // if there is no previous node, the head node will be removed
        if (!previousNode) {
          this.head = currentNode.next;
        } else {
          // change pointer for previous node
          // to remove current
          previousNode.next = currentNode.next;
        }
        this.length--;
      } else {
        // we move the pointer both for current and previous node
        previousNode = currentNode;
        // go to next node until we will find data we search
        // or next is not null
        currentNode = currentNode.next;
      }
    }
    this.length--;
  };

  removeDuplicates = () => {
    var current = this.head;
    var currentNext = current.next;

    // the list of unique data values
    var used = {};
    // of course, head data is unique
    used[current.data] = true;

    // repeat while it is not end of th list
    // so while we have next element
    while (currentNext) {
      var data = currentNext.data;
      // check if next element data is in unique list
      if (used[data]) {
        // if next element data is in unique list
        // skip next element: 
        // current element will point on one next after
        current.next = currentNext.next;
      } else {
        // if now - add it to the unique list
        used[data] = true;
        current = currentNext;
      }
      // current element moves on one position next
      currentNext = currentNext.next;
    }

    return head;
  }
}
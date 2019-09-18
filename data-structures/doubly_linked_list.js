class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = 0;
    this.length = 0;
  };


  /** 
   * add new node to the end ao the list
   * @param {*} data - new node data
   */
  addNode = data => {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      // same as for singly linked list: 
      // we need to find the tail node, which has null next node
      // so that our new node will become its next node
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      // when current node is one without next
      // save new node to its next
      currentNode.next = newNode;
      // current node, which is last in list will previous for new node
      newNode.prev = currentNode; 
    }
    // increase list lense
    this.length++;
  }

  /**
   * search and remove node By data
   * @param {*} data 
   */
  removeNode(data) {
    // declare current node as head; previous is null for head node
    let currentNode = this.head;

    // search for node to delete while we have current node
    while (currentNode) {
      if (currentNode.data === data) {
        // if there is no previous node for current node, the head node will be removed
        if (!currentNode.prev) {
          this.head = currentNode.next;
          // drop head previous node
          this.head.prev = null;
        } else {
          // update pointers
          // after delete previous for current node in next field will point to current next node
          currentNode.prev.next = currentNode.next;
          // after delete next for current node in prev field will point to current prev node
          currentNode.next.prev = currentNode.prev;
        }
        this.length--;
      } else {
        // go to next node until we will find data we search
        // or next is not null
        currentNode = currentNode.next;
      }
    }
    this.length--;
  };
}
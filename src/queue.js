const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}
class Queue {
  constructor() {
      this.head = null;
      this.length = 0;      
      this.current = "";
    }
  getUnderlyingList() {    
    this.current = this.head;    
    return this.current
  }

  enqueue(value) {    
    if (this.length === 0) {
      this.head = new Node(value);
      this.current = this.head      
    } else {
      this.current = this.head;
      while (this.current.next) {
        this.current = this.current.next;
      }
      this.current.next = new Node(value);      
    }    
    this.length++;
    
  }

  dequeue() {    
    this.current = this.head;
    let delElement = this.current.value;
    this.head = this.current.next;
    this.length--;
    return delElement;
  }   

}

module.exports = {
  Queue
};

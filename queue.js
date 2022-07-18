class Queue {
    constructor() {
      this.elements = {};
      this.head = 1;
      this.tail = 1;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }
  
  let q = new Queue();
  for (let i = 1; i <= 30; i++) {
   q.enqueue(i);
  }
  // get the current item at the front of the queue
  console.log("Nguoi xep hang dau tien:",q.peek()); 
  
  // get the current length of queue
  console.log("nguoi xep hang cuoi cung:",q.length); 
  
  // dequeue all elements
  while (!q.isEmpty) {
    console.log("so thu tu len xe",q.dequeue());
  }
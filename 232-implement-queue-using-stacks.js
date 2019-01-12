/**
 * Time: O(1) - amortized for pop/peek
 * Space: O(n)
 * n - # of elements
 */

/**
 * Initialize your data structure here.
 */
function MyQueue() {
  this.front = [];
  this.back = [];
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.back.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.front.length) {
    while (this.back.length) { // move back to front
      this.front.push(this.back.pop());
    }
  }
  return this.front.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.front.length) {
    while (this.back.length) { // move back to front
      this.front.push(this.back.pop());
    }
  }
  return this.front[this.front.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.front.length && !this.back.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

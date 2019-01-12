/**
 * Time: O(1)
 * Space: O(n)
 */

/**
 * initialize your data structure here.
 */
function MinStack() {
  this.vals = [];
  this.mins = [];
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.vals.push(x);

  if (!this.mins.length || x <= this.getMin()) {
    this.mins.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const popped = this.vals.pop();

  if (this.mins.length && popped === this.getMin()) {
    this.mins.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.vals[this.vals.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.mins[this.mins.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

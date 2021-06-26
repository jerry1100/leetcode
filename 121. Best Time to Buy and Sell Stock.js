/*
  Naive solution:
    Go through all possible starting positions (n-1) and calculate maximum
    profit possible by varying the ending positions. Keep track of max
    profit so far.

  Analysis:
    Time: O(n^2) to check all start and stop sequences
    Space: O(1)
 */

function maxProfit(prices) {
  let maxProfit = 0;

  for (let start = 0; start < prices.length; start++) {
    for (let end = start + 1; end < prices.length; end++) {
      const profit = prices[end] - prices[start];

      maxProfit = Math.max(profit, maxProfit);
    }
  }

  return maxProfit;
}

/*
  Optimal solution:
    The optimal solution comes from the realization that the maximum profit
    for a given stop index is prices[stopIndex] - lowestPriceSoFar. So we
    can just keep track of the lowest price we've seen so far and calculate
    the profit in one pass.

  Analysis:
    Time: O(n)
    Space: O(1)
 */
function maxProfit2(prices) {
  let maxProfit = 0;
  let minSoFar = Infinity;

  prices.forEach(price => {
    const profit = price - minSoFar;

    minSoFar = Math.min(price, minSoFar);
    maxProfit = Math.max(profit, maxProfit);
  });

  return maxProfit;
}

console.log(
  maxProfit([1, 2, 3, 1, 5]), // 4
  maxProfit([]), // 0
  maxProfit([3, 2, 1]), // 0
  maxProfit([1, 2, 3]), // 2
);

console.log(
  maxProfit2([1, 2, 3, 1, 5]),
  maxProfit2([]),
  maxProfit2([3, 2, 1]),
  maxProfit2([1, 2, 3]),
);

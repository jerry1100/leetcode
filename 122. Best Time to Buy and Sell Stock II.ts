// N: length of prices array
// Time: O(N)
// Space: O(1)

function maxProfit(prices: number[]): number {
    let profit = 0;
    
    for (let i = 0; i < prices.length - 1; i++) {
        const curr = prices[i];
        const next = prices[i + 1];
        
        // Anytime next > curr, we can profit. Even if prices continue to go up,
        // the individual profits from selling immediately will equal the profit
        // from selling just once at the peak.
        if (next > curr) {
            profit += next - curr;
        }
    }
    
    return profit;
};
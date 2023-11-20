/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];

        // Update the minimum price if a lower price is encountered
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        } else {
            // Calculate the potential profit by selling at the current price
            const potentialProfit = currentPrice - minPrice;

            // Update the maximum profit if the potential profit is greater
            if (potentialProfit > maxProfit) {
                maxProfit = potentialProfit;
            }
        }
    }

    return maxProfit;
};
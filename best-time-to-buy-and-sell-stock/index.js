/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0],
    maxProfit = 0;

  for (let i in prices) {
    const price = prices[i];
    const profit = price - minPrice;
    if (price < minPrice) minPrice = price;
    else if (profit > maxProfit) maxProfit = profit;
  }

  return maxProfit;
};

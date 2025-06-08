let prices = [7, 1, 5, 3, 6, 4];

let maxProfit = 0;
let min = prices[0];
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < min) min = prices[i];
  let profit = prices[i] - min;
  maxProfit = Math.max(maxProfit, profit);
}
console.log(maxProfit);

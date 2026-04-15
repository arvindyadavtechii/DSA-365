var maxProfit = function(prices) {
    let buy1 = -Infinity;
    let sell1 = 0;
    let buy2 = -Infinity;
    let sell2 = 0;

    for (let price of prices) {
        buy1 = Math.max(buy1, -price);          // first buy
        sell1 = Math.max(sell1, buy1 + price);  // first sell
        buy2 = Math.max(buy2, sell1 - price);   // second buy
        sell2 = Math.max(sell2, buy2 + price);  // second sell
    }

    return sell2;
};
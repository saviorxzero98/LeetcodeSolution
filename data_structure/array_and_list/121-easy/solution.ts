function maxProfit(prices: number[]): number {
    let buyPrice = 10000;
    let profit = 0;
    let sellPrice = 0;
    
    for (let price of prices) {
        if (buyPrice > price) {
            buyPrice = price;
        }
        sellPrice = price - buyPrice;
        if (profit < sellPrice) {
            profit = sellPrice;
        }
    }
    return profit;
};
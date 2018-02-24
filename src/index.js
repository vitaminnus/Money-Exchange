// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };
    if (currency <= 0) {
        return {};
    };
    const result = {};
    const coins = {"H":50, "Q":25, "D":10, "N":5, "P":1};
    let count = currency;
    Object.keys(coins).forEach(elem => {
        let c = coins[elem];
        const coin = Math.floor(count/c);
        count = count - coin*c;
        if (coin > 0) {
            result[elem] = coin;
        };
    });
    return result;
}

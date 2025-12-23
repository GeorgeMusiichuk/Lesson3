const currencyConverter = (a, b) => a * b;

const usdToRub = (usd) => {
    if (usd > 100 && usd <= 1000) {
        return currencyConverter(usd, 85);
    } else if (usd > 1000) {
        return currencyConverter(usd, 95);
    }

    return currencyConverter(usd, 82);
};

const euroToRub = (euro) => {
    if (euro > 200 && euro <= 1000) {
        return currencyConverter(euro, 105);
    } else if (euro > 1000) {
        return currencyConverter(euro, 120)
    } 

    return currencyConverter(euro, 100);
}

console.log(usdToRub(1500))
console.log(euroToRub(3000))
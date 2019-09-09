// Foreign exchange exercise - with CALLBACKS

function convertFromEur(amount, curr, converting) {
    result = 0;
    switch (curr) {
        case 'JPY':
            result = getJpyFromEur(amount);
            break;
        case 'AUD':
            result = getAudFromEur(amount);
            break;
        case 'CHF':
            result = getChfFromEur(amount);
            break;
        default:
            result = 'The requested currency is not available. Please enter JPY, AUD or CHF';
    }
    return converting(result);
}

const getJpyFromEur = (amount) => {
    // 1 EUR = 116.402 JPY
    const rate = 116.402;
    return amount * rate;
}

const getAudFromEur = (amount) => {
    // 1 EUR = 1.62072 AUD
    const rate = 1.62072;
    return amount * rate;
};

const getChfFromEur = (amount) => {
    // 1 EUR = 1.08329 CHF
    const rate = 1.08329;
    return amount * rate;
};

const rounding = (number) => {
    return number.toFixed(2);
}

console.log(convertFromEur(100, 'JPY', rounding));
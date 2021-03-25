export const format = (amount, digits = 2) => {
    if (!amount) return 0;
    const fixedAmount = amount % 1 === 0 ? amount : amount.toFixed(digits);
    return fixedAmount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export const formatToCurrency = (amount, locale = 'en-US', localeCurrency = 'USD') => {
    if (!amount) return 0;
    const formatOptions = { style: 'currency', currency: localeCurrency };
    return new Intl.NumberFormat(locale, formatOptions).format(amount);
}

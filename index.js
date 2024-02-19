function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    let result;

    // Define conversion rates
    const conversionRates = {
        'INR': 1,
        'USD': 83.5,
        'EUR': 89.47,
        'GBP': 104.74
    };

    // Convert currency
    if (fromCurrency === toCurrency) {
        result = amount;
    } else {
        const fromRate = conversionRates[fromCurrency];
        const toRate = conversionRates[toCurrency];
        result = (amount / fromRate) * toRate;
    }

    // Display result
    document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

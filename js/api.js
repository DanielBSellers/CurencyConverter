const apiKey = 'fca_live_lV3bk3YaXnI3cykk3w2DtnVjNCFODmm83sem8IL0';
const apiUrl = 'https://api.freecurrencyapi.com/v1/latest';

// Function to get the conversion rate
async function getConversionRate(fromCurrency, toCurrency) {
    try {
        const response = await fetch(`${apiUrl}?apikey=${apiKey}&currencies=${toCurrency}&base_currency=${fromCurrency}`);
        const data = await response.json();
        return data.data[toCurrency];
    } catch (error) {
        console.error('Error fetching conversion rate:', error);
        alert('Failed to fetch conversion rate. Please try again later.');
        return null;
    }
}

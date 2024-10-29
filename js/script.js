//dropdowns
const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "AUD", symbol: "A$", name: "Australian Dollar" },
    { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
    { code: "CHF", symbol: "CHF", name: "Swiss Franc" },
    { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
    { code: "INR", symbol: "₹", name: "Indian Rupee" },
    { code: "RUB", symbol: "₽", name: "Russian Ruble" },
    { code: "KRW", symbol: "₩", name: "South Korean Won" },
    { code: "MXN", symbol: "$", name: "Mexican Peso" },
    { code: "BRL", symbol: "R$", name: "Brazilian Real" },
    { code: "ZAR", symbol: "R", name: "South African Rand" },
    { code: "SEK", symbol: "kr", name: "Swedish Krona" },
    { code: "NOK", symbol: "kr", name: "Norwegian Krone" },
    { code: "DKK", symbol: "kr", name: "Danish Krone" },
    { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
    { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
    { code: "ILS", symbol: "₪", name: "Israeli Shekel" },
    { code: "TRY", symbol: "₺", name: "Turkish Lira" },
    { code: "THB", symbol: "฿", name: "Thai Baht" },
    { code: "PLN", symbol: "zł", name: "Polish Zloty" }
];

function populateDropdown(dropdown) {
    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency.code;
        option.textContent = `${currency.symbol} - ${currency.name} (${currency.code})`;
        dropdown.appendChild(option);
    });
}

const dropdown1 = document.getElementById('currencyDropdown');
const dropdown2 = document.getElementById('currencyDropdownTwo');
const convertButton = document.getElementById('convertButton');
const curInput = document.getElementById('curInput');
const resultInput = document.getElementById('result');

populateDropdown(dropdown1);
populateDropdown(dropdown2);

// Conversion logic
async function handleConversion() {
    const fromCurrency = dropdown1.value;
    const toCurrency = dropdown2.value;
    const amount = parseFloat(curInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const rate = await getConversionRate(fromCurrency, toCurrency);
    if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        resultInput.value = convertedAmount;
    }
}

convertButton.addEventListener('click', handleConversion);

//if-else
const countriesDropdown = document.getElementById('countries');
const currencyDisplay = document.getElementById('currencyDisplay');

function displayCurrency() {
    const selectedValue = countriesDropdown.value;
    let currencyName;

    if (selectedValue === "USD") {
        currencyName = "US Dollar";
    } else if (selectedValue === "euro") {
        currencyName = "Euro";
    } else if (selectedValue === "JY") {
        currencyName = "Japanese Yen";
    } else if (selectedValue === "BP") {
        currencyName = "British Pound";
    } else if (selectedValue === "AD") {
        currencyName = "Australian Dollar";
    } else if (selectedValue === "CD") {
        currencyName = "Canadian Dollar";
    } else if (selectedValue === "SF") {
        currencyName = "Swiss Franc";
    } else if (selectedValue === "CY") {
        currencyName = "Chinese Yuan";
    } else if (selectedValue === "IR") {
        currencyName = "Indian Rupee";
    } else if (selectedValue === "RR") {
        currencyName = "Russian Ruble";
    } else if (selectedValue === "SKW") {
        currencyName = "South Korean Won";
    } else if (selectedValue === "MP") {
        currencyName = "Mexican Peso";
    } else if (selectedValue === "BR") {
        currencyName = "Brazilian Real";
    } else if (selectedValue === "SAR") {
        currencyName = "South African Rand";
    } else if (selectedValue === "SK") {
        currencyName = "Swedish Krona";
    } else if (selectedValue === "NK") {
        currencyName = "Norwegian Krone";
    } else if (selectedValue === "DK") {
        currencyName = "Danish Krone";
    } else if (selectedValue === "SD") {
        currencyName = "Singapore Dollar";
    } else if (selectedValue === "HKD") {
        currencyName = "Hong Kong Dollar";
    } else if (selectedValue === "IS") {
        currencyName = "Israeli Shekel";
    } else if (selectedValue === "TL") {
        currencyName = "Turkish Lira";
    } else if (selectedValue === "TB") {
        currencyName = "Thai Baht";
    } else if (selectedValue === "PZ") {
        currencyName = "Polish Zloty";
    } else {
        currencyName = "Unknown Currency";
    }

    currencyDisplay.value = currencyName;
}

countriesDropdown.addEventListener('change', displayCurrency);


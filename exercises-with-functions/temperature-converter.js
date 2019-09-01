function celsiusToFahrenheit(celsiusTemp) {
    const fahrenheitTem = celsiusTemp * (9 / 5) + 32;
    return `${celsiusTemp}°C is ${fahrenheitTem}°F.`
}

function fahrenheitToCelsius(fahrenheitTem) {
    const celsiusTemp = (fahrenheitTem - 32) * (9 / 5);
    return `${fahrenheitTem}°F is ${celsiusTemp}°C.`
}

console.log(celsiusToFahrenheit(30));
console.log(fahrenheitToCelsius(30));
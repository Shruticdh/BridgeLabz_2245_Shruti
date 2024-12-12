// 8. Create a function that will convert from Celsius to Fahrenheit
// Fahrenheit=(Celsius×9/5)+32

let celcius =25;
function conversionFahrenheit(celcius){
    let fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit;
}
let result = conversionFahrenheit(celcius);
console.log(result);

// 9. Create a function that will convert from Fahrenheit to Celsius
// Celcious=(Fahrenheit - 32) * 5/9

let fahrenheit =77;
function conversionFahrenheit(fahrenheit){
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}
let result = conversionFahrenheit(fahrenheit);
console.log(result);
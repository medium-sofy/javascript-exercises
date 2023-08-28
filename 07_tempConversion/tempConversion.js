//To Fahrenheit	:x °C ≘ (x × 


const convertToCelsius = function(Fahrenheit) {
  let Celsius = (Fahrenheit - 32) * 5/9
  return +Celsius.toFixed(1)

};

const convertToFahrenheit = function(Celsius) {
  let Fahrenheit = (Celsius * 9/5) + 32
  return +Fahrenheit.toFixed(1)
};

console.log(convertToFahrenheit(0))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

var tc = process.argv.slice(2);
var tf = convertToF(tc);
console.log("Convert °C to °F");
console.log(tc + "°C" + " > " + tf + "°F");
function convertToF(tс) {
  return (9/5) * tc + 32;
}

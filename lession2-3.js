var a, b, result;
var args = process.argv.slice(2);
a = new Number(args[0]);
b = new Number(args[1]);

if (a >= 0 && b >= 0) {
  console.log("minus: " + minus(a,b));
} else if (a < 0 && b < 0) {
  console.log("mul:" + mul(a,b));
} else {
  console.log("sum: " + sum(a,b));
}

function minus(a, b) {
  return (a - b);
}

function mul(a, b) {
  return a * b;
}

function sum(a, b) {
  return a + b;
}

function power(val, pow) {
  return pow == 1 ? val : val * power(val, pow - 1);
}

let val,pow;
let args = process.argv.slice(2);
val = Number(args[0]);
pow = Number(args[1]);

console.log(power(val, pow));

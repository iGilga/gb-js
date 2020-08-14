function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return (a - b);
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return (b == 0 ? 'no div' : (a / b));
}

function mathOperation(a, b, operation) {
  let result;
  switch(operation) {
    case 'add':
      result = add(a,b);
      break;
    case 'sub':
      result = sub(a,b);
      break;
    case 'mul':
      result = mul(a,b);
      break;
    case 'div':
      result = div(a,b);
      break;
    default:
      result = 'error';
      break;
  }
  return result;
}

let a,b,operation;
let args = process.argv.slice(2);
a = Number(args[0]);
b = Number(args[1]);
operation = args[2];
console.log(mathOperation(a,b,operation));

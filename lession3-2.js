// first Variant
function countBasketPrice(products) {
  let accumulator = 0;
  for (let key of products) {
    let cost = key.cost;
    let count = key.count;
    accumulator += (cost*count);
  }
  return accumulator;
}

// Second Variant
const reducer = (accumulator, currentValue) => {
    return accumulator + (currentValue.cost * currentValue.count);
};

let products = [{
  name: 'Beer',
  cost: 2,
  count: 10
}, {
  name: 'Vodka',
  cost: 5,
  count: 2
}, {
  name: 'Brandy',
  cost: 15,
  count: 1
}];

console.log(products);

let result = countBasketPrice(products);

console.log("Total: " + result + "P");

result = products.reduce(reducer, 0);

console.log("Total: " + result + "P");

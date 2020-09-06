var _ = undefined;
var cartList = [];
var tableCart = document.getElementById('cart-table');
var tableCartBody = document.getElementById('cart-body');
var listProduct = document.getElementById('product-list');

var products = [
  {
    id: 1,
    name: "Mystery Box #1",
    cost: 100,
    img: "img/1.png",
  }, {
    id: 2,
    name: "Mystery Box #2",
    cost: 200,
    img: "img/1.png",
  }, {
    id: 3,
    name: "Mystery Box #3",
    cost: 300,
    img: "img/1.png",
  }
];

function Cart(product) {
  this.id = product.id;
  this.name = product.name;
  this.cost = product.cost;
  this.count = 1;
  this.amount = this.cost;
  this.add = function() {
    this.count++;
    this.calcAmount();
  }
  this.calcAmount = function() {
    this.amount = this.cost * this.count;
  }
  this.remove = function() {
    if (this.count > 1) {
      this.count--;
      this.calcAmount();
    }
  }
}

const init = () => {
  for(var i = 0; i < products.length; i++) {
    let item = renderProductItem(products[i]);
    listProduct.appendChild(item);
  }
}


const renderProductItem = (product) => {
  let item = getEl('li', 'product-item', { id: product.id });
  let name = getEl('p', 'product-title');
  name.innerHTML = product.name;
  let cnt = getEl('div', 'product-cnt');
  let img = getEl('img', _, { src: product.img, width: 300 });
  let cost = getEl('cost', 'product-cost');
  cnt.appendChild(img);
  cnt.appendChild(cost);
  cost.innerHTML = `${product.cost}$`;
  let buy = getEl('button', 'product-buy');
  buy.innerHTML = 'Buy';
  buy.addEventListener('click', onAdd);
  item.appendChild(name);
  item.appendChild(cnt);
  item.appendChild(buy);
  return item;
}

const renderCartItem = (cart) => {
  let tr = getEl('tr', _, { id: cart.id });
  let row = [];
  let name = getEl('td');
  name.innerHTML = cart.name;
  row.push(name);
  let count = getEl('td');
  count.innerHTML = cart.count;
  row.push(count);
  let cost = getEl('td');
  cost.innerHTML = `${cart.cost}$`;
  row.push(cost);
  for (let item of row) {
    tr.appendChild(item);
  }
  return tr;
}

const getItemCartById = (id) => {
  let rows = Array.from(tableCartBody.children);
  let row = rows.find((item) => (item.getAttribute('id') == id));
  return row;
}


const onAdd = (element) => {
  let id = element.target.parentElement.getAttribute('id');
  let cart = getCartById(id);
  if (cart) {
    cart.add();
    let row = getItemCartById(cart.id);
    if (row) {
      row.children[1].innerHTML = cart.count;
      row.children[2].innerHTML = `${cart.amount}$`;
    }
  } else {
    if (isHiddenTable) {
      tableCart.style.visibility = 'visible';
    }
    let product = products.find((item) => item.id == id);
    let newCart = new Cart(product);
    cartList.push(newCart);
    let row = renderCartItem(newCart);
    tableCartBody.insertBefore(row, tableCartBody.firstChild);
  }
  renderTotalAmount();
}

const isHiddenTable = () => tableCart.style.visibility == 'hidden';

const renderTotalAmount = () => {
  let element = document.getElementById('total-amount');
  let total = getTotalAmount();
  element.children[2].innerHTML = `${total}$`;
}

const getTotalAmount = () => {
  return cartList.reduce((acc, cur) => (acc + cur.amount), 0);
}

const getCartById = (id) => {
  return cartList.find((item) => item.id == id);
}

const getEl = (elm, className, attributes) => {
  let result = document.createElement(elm);
  if (className) {
    result.className = className
  };
  if (attributes) {
    for (let key in attributes) {
      result.setAttribute(key, attributes[key]);
    }
  }
  return result;
}

window.onload = init;

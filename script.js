/* const { fetchProducts } = require("./helpers/fetchProducts"); */
const total = [];
const products = document.querySelector('.items');
const totalContainer = document.querySelector('.totalContainer');
const cart = document.querySelector('.cart__items');
// Cria lista de produtos 
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cart.innerHTML);
};

// calcula o valor total 

const calculateTotal = () => {
  const all = total.reduce((acc, curr) => acc + curr, 0); 
  console.log('total', all);
  const span = document.createElement('span');
  span.className = 'total-price';
  span.innerText = `O total da compra e: ${all}`;
  totalContainer.appendChild(span);
};

// Adiciona Elementos ao carrinho 

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  total.push(salePrice);
  calculateTotal();
  return li;
};

const getItem = async (parm) => {
  const test = await fetchItem(parm);
  const cartItem = {
    sku: test.id,
    name: test.title,
    salePrice: test.price,
  };
  cart.appendChild(createCartItemElement(cartItem));
  saveCartItems(cart.innerHTML);
};

const addTocart = (event) => {
  getItem(event.target.parentNode.firstChild.innerHTML);
};

const productsList = async () => {
  const listItens = await fetchProducts('computador');
  listItens.forEach((product) => {
    const itens = {
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
    };

    products.appendChild(createProductItemElement(itens));
  });
  const clickProduct = document.querySelectorAll('.item__add');
  clickProduct.forEach((button) => {
    button.addEventListener('click', addTocart);
  });
};

// ainda n
//  const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText; 
 
const reloadcart = () => {
  cart.innerHTML = getSavedCartItems();
  cart.childNodes.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};
const clear = () => {
 const boton = document.querySelector('.empty-cart');
boton.addEventListener('click', () => {
  localStorage.clear();
  cart.innerText = '';
}); 
};

window.onload = async () => {
  productsList();
  reloadcart();
  clear();
};

/* const { fetchProducts } = require("./helpers/fetchProducts"); */
let totalCalculate = 0;

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

// remove iten e recalcula o valor total

const cartItemClickListener = (event, salePrice) => {
  event.target.remove();
  saveCartItems(cart.innerHTML);
  totalCalculate -= salePrice;
  const span = document.createElement('span');
  span.className = 'total-price';
  totalContainer.innerText = '';
  span.innerText = `O total da compra e: R$${totalCalculate}`;
  totalContainer.appendChild(span);
};

// calcula o valor total 

const calculateTotal = () => {
  const span = document.createElement('span');
  span.className = 'total-price';
  totalContainer.innerText = '';
  span.innerText = `O total da compra e: R$${totalCalculate}`;
  totalContainer.appendChild(span);
};

// Adiciona Elementos ao carrinho 

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // eslint-disable-next-line no-restricted-globals
  li.addEventListener('click', () => cartItemClickListener(event, salePrice));
  totalCalculate += salePrice;
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

// adiciona lista de produtos atraves da API

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

// Recupera itens adicionados no carrinho depois de recaregar a pagina
 
const reloadcart = () => {
  cart.innerHTML = getSavedCartItems();
  cart.childNodes.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};

// limpa intens adicionados no carrinho 
const clear = () => {
 const boton = document.querySelector('.empty-cart');
boton.addEventListener('click', () => {
  localStorage.clear();
  cart.innerText = '';
  totalCalculate = 0;
  calculateTotal();
}); 
};

window.onload = async () => {
  productsList();
  reloadcart();
  clear();
};

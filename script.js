/* const { fetchProducts } = require("./helpers/fetchProducts"); */
const products = document.querySelector('.items');
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
};
// Adiciona Elemntodos ao carrinho elemetos no carrinho 

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
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
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = async () => {
  productsList();
};

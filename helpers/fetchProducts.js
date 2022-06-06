const { createProductItemElement } = require('../script');

const fetchProducts = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const request = await (await fetch(url)).json();
  const { sku, name, image } = request;
  createProductItemElement({ sku, name, image });
};
fetchProducts();
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

const fetchProducts = async (parm) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${parm}`;
  try {
    const request = await (await fetch(url)).json();
    return request.results;
  } catch (error) {
  return error;
  }
};
/* console.log(fetchProducts('computador')); */

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

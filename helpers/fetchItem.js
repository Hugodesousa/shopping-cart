const fetchItem = async (parm) => {
  const url = `https://api.mercadolibre.com/items/${parm}`;
  const request = await (await fetch(url)).json();
  return request;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

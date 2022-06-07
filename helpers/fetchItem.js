const fetchItem = async (parm) => {
  const url = `https://api.mercadolibre.com/items/${parm}`;
  try {
    const request = await (await fetch(url)).json();
    return request;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

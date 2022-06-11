const getSavedCartItems = () => {
  const test = JSON.parse(localStorage.getItem('cartItems'));
  return test;
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

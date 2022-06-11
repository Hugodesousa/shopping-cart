const getSavedCartItems = () => {
  const test = localStorage.getItem('cartItems');
  return test;
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

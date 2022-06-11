const saveCartItems = (parm) => localStorage.setItem('cartItems', JSON.stringify(parm));

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

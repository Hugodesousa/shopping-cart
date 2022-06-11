const saveCartItems = (parm) => {
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  cart.push(parm);
  console.log(Object.entries(parm)[0]);
  console.log(cart[0]);
  /* console.log(cart.includes(Object.entries(parm)[0])); */
  localStorage.setItem('cartItems', JSON.stringify(cart));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

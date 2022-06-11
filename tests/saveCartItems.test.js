const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Testa se saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function')
  });

  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>')

    expect(localStorage.setItem).toHaveBeenCalled();
  });
  
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Testa se getSavedCartItems é uma função', () => {
    expect(typeof getSavedCartItems).toBe('function')
  });

  test('Teste se, ao executar getSavedCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    getSavedCartItems();

    expect(localStorage.getItem).toHaveBeenCalled();
  });
});

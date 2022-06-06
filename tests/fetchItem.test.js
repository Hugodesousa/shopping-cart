require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('1 - Teste a função fetchItem', () => {
  test('Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  });
  test('Testa se fetch foi chamada', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledTimes(1)
  });
  test('Teste se, ao chamar a função fetchItem com o argumento "computador", a função fetch utiliza o endpoint correto', () => {
    fetchItem('MLB1615760527')

    expect(fetch).toHaveBeenLastCalledWith("https://api.mercadolibre.com/items/MLB1615760527")
  });
});

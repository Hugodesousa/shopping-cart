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
  test('Teste se o retorno da função fetchItem com o argumento "computador" é uma estrutura de dados igual ao objeto "computadorSearc"', async () => {
    const result = await fetchItem ('MLB1615760527');

    expect(result).toEqual(item) 
  });
  test('Testa se fetch foi chamada', async () => {
    const resultErr = await fetchItem();
    expect(resultErr).toEqual(new Error('You must provide an url'))
  });
});

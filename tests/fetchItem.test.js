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
  test('Teste se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint correto', () => {
    fetchItem('MLB1615760527')

    expect(fetch).toHaveBeenLastCalledWith("https://api.mercadolibre.com/items/MLB1615760527")
  });
  test('Teste se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto "MLB1615760527Searc"', async () => {
    const result = await fetchItem ('MLB1615760527');

    expect(result).toEqual(item) 
  });
  test('Testa se fetchItem sem parametro retorna um erro', async () => {
    const resultErr = await fetchItem();
    expect(resultErr).toEqual(new Error('You must provide an url'))
  });
});

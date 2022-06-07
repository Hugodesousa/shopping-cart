require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  test('Testa se fetch foi chamada', () => {
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalledTimes(1)
  });
  test('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint correto', () => {
    fetchProducts('computador')

    expect(fetch).toHaveBeenLastCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  test('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto "computadorSearc"', async () => {
    const result = await fetchProducts ('computador');

    expect(result).toEqual(computadorSearch.results) 
  });
  test('Testa se fetch foi chamada', async () => {
    const resultErr = await fetchProducts ();
    expect(resultErr).toEqual(new Error('You must provide an url'))
  });
});

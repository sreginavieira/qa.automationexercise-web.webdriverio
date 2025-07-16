// test/specs/09.searchProduct.e2e.ts

import HomePage from '../pageobjects/home.page';
import ProductsPage from '../pageobjects/products.page';

describe('Pesquisar Produto', () => {
  const productName = 'Dress'; // Altere conforme o produto que deseja pesquisar

  it('Deve pesquisar um produto e exibir resultados', async () => {
    // 1. Abrir navegador e acessar a URL
    await HomePage.open('/');

    // 2. Clicar em "Products"
    await HomePage.goToProducts();

    // 3. Verificar que está na página de produtos
    const url = await browser.getUrl();
    expect(url).toContain('/products');

    // 4. Inserir nome do produto e clicar em "Search"
    await ProductsPage.searchProduct(productName);

    // 5. Verificar que a seção "Searched Products" aparece
    await expect(ProductsPage.searchedProductsTitle).toBeDisplayed();

    // 6. Validar que os produtos listados correspondem ao termo pesquisado
    const products = await ProductsPage.productList;
    expect(products.length).toBeGreaterThan(0);

    for (const product of products) {
      const text = await product.getText();
      expect(text.toLowerCase()).toContain(productName.toLowerCase());
    }
  });
});
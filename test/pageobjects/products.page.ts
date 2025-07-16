// test/pageobjects/products.page.ts
import BasePage from './base.page';

class ProductsPage extends BasePage {
  get searchInput() { return $('#search_product'); }
  get searchBtn() { return $('#submit_search'); }
  get searchedProductsTitle() { return $('//h2[text()="Searched Products"]'); }
  get productList() { return $$('.productinfo.text-center'); }
  get addToCartBtns() { return $$('a.add-to-cart'); }
  get continueShoppingBtn() { return $('button.close-modal'); }
  get viewCartBtn() { return $('a[href="/view_cart"]'); }
  get viewProductBtns() { return $$('a[href^="/product_details/"]'); }

  async searchProduct(productName: string) {
    await this.searchInput.setValue(productName);
    await this.searchBtn.click();
  }

  async addProductToCart(index: number) {
    await this.productList[index].moveTo();
    await this.addToCartBtns[index].click();
  }

  async viewProduct(index: number) {
    await this.viewProductBtns[index].click();
  }
}

export default new ProductsPage();
// test/pageobjects/cart.page.ts
import BasePage from './base.page';

class CartPage extends BasePage {
  get cartItems() { return $$('.cart_info tbody tr'); }
  get removeBtns() { return $$('a.cart_quantity_delete'); }
  get productQuantityInputs() { return $$('input.cart_quantity_input'); }
  get productPrices() { return $$('td.cart_price'); }
  get productTotals() { return $$('td.cart_total'); }

  async getProductQuantity(index: number) {
    return await this.productQuantityInputs[index].getValue();
  }

  async removeProduct(index: number) {
    await this.removeBtns[index].click();
  }

  async isCartEmpty() {
    return (await this.cartItems.length) === 0;
  }
}

export default new CartPage();
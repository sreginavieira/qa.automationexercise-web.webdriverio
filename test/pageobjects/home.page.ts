export default class HomePage {
  static open() {
    throw new Error('Method not implemented.');
  }
  static goToSignup() {
    throw new Error('Method not implemented.');
  }
  public get signupLoginBtn() {
    return $('a[href="/login"]');
  }

  public async open() {
    await browser.url('/');
  }

  public async goToSignup() {
    await this.signupLoginBtn.waitForDisplayed();
    await this.signupLoginBtn.click();
  }
}
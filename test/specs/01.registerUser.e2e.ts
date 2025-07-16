import HomePage from '../pageobjects/home.page';
import SignupPage from '../pageobjects/signup.page';
import AccountPage from '../pageobjects/account.page';

describe('Registrar um usuário', () => {
  it('deve registrar, logar e deletar o usuário', async () => {
    const timestamp = Date.now();
    const name = 'Test User';
    const email = `testuser${timestamp}@mail.com`;
    const password = 'Test@1234';

    await HomePage.open();
    await HomePage.goToSignup();
    await SignupPage.signup(name, email);

    await SignupPage.fillAccountDetails({
      password,
      day: '10',
      month: '5',
      year: '1990'
    });

    await SignupPage.fillAddressDetails({
      firstName: 'Test',
      lastName: 'User',
      company: 'TestCompany',
      address1: 'Rua Teste 123',
      address2: 'Apto 1',
      country: 'Canada',
      state: 'SP',
      city: 'Sao Paulo',
      zipcode: '12345678',
      mobile: '11999999999'
    });

    await SignupPage.createAccountBtn.click();

    await expect(SignupPage.accountCreatedMsg).toBeDisplayed();
    await SignupPage.continueBtn.click();

    await SignupPage.deleteAccountBtn.waitForDisplayed();
    await SignupPage.deleteAccountBtn.click();
    await expect(SignupPage.accountDeletedMsg).toBeDisplayed();
    await SignupPage.continueAfterDeleteBtn.click();
  });
});
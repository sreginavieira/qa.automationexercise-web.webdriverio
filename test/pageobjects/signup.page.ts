interface AccountDetails {
    password: string;
    day: string;
    month: string;
    year: string;
}
interface AddressDetails {
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobile: string;
}
export default class SignupPage {
    static signup(name: string, email: string) {
      throw new Error('Method not implemented.');
    }
    static fillAccountDetails(arg0: { password: string; day: string; month: string; year: string; }) {
      throw new Error('Method not implemented.');
    }
    static fillAddressDetails(arg0: { firstName: string; lastName: string; company: string; address1: string; address2: string; country: string; state: string; city: string; zipcode: string; mobile: string; }) {
      throw new Error('Method not implemented.');
    }
    static createAccountBtn: any;
    static accountCreatedMsg(accountCreatedMsg: any) {
      throw new Error('Method not implemented.');
    }
    static continueBtn: any;
    static deleteAccountBtn: any;
    static accountDeletedMsg(accountDeletedMsg: any) {
      throw new Error('Method not implemented.');
    }
    static continueAfterDeleteBtn: any;
    public get signupNameInput() { return $('input[data-qa="signup-name"]'); }
    public get signupEmailInput() { return $('input[data-qa="signup-email"]'); }
    public get signupBtn() { return $('button[data-qa="signup-button"]'); }
    public get titleMr() { return $('#id_gender1'); }
    public get passwordInput() { return $('input[data-qa="password"]'); }
    public get daysSelect() { return $('#days'); }
    public get monthsSelect() { return $('#months'); }
    public get yearsSelect() { return $('#years'); }
    public get newsletterCheckbox() { return $('#newsletter'); }
    public get offersCheckbox() { return $('#optin'); }
    public get firstNameInput() { return $('input[data-qa="first_name"]'); }
    public get lastNameInput() { return $('input[data-qa="last_name"]'); }
    public get companyInput() { return $('input[data-qa="company"]'); }
    public get address1Input() { return $('input[data-qa="address"]'); }
    public get address2Input() { return $('input[data-qa="address2"]'); }
    public get countrySelect() { return $('select[data-qa="country"]'); }
    public get stateInput() { return $('input[data-qa="state"]'); }
    public get cityInput() { return $('input[data-qa="city"]'); }
    public get zipcodeInput() { return $('input[data-qa="zipcode"]'); }
    public get mobileInput() { return $('input[data-qa="mobile_number"]'); }
    public get createAccountBtn() { return $('button[data-qa="create-account"]'); }
    public get accountCreatedMsg() { return $('h2[data-qa="account-created"]'); }
    public get continueBtn() { return $('a[data-qa="continue-button"]'); }
    public get deleteAccountBtn() { return $('a[href="/delete_account"]'); }
    public get accountDeletedMsg() { return $('h2[data-qa="account-deleted"]'); }
    public get continueAfterDeleteBtn() { return $('a[data-qa="continue-button"]'); }

    public async signup(name: string, email: string) {
        await this.signupNameInput.setValue(name);
        await this.signupEmailInput.setValue(email);
        await this.signupBtn.click();
    }
    public async fillAccountDetails(details: AccountDetails) {
        await this.titleMr.click();
        await this.passwordInput.setValue(details.password);
        await this.daysSelect.selectByAttribute('value', details.day);
        await this.monthsSelect.selectByAttribute('value', details.month);
        await this.yearsSelect.selectByAttribute('value', details.year);
        await this.newsletterCheckbox.click();
        await this.offersCheckbox.click();
    }
    public async fillAddressDetails(details: AddressDetails) {
        await this.firstNameInput.setValue(details.firstName);
        await this.lastNameInput.setValue(details.lastName);
        await this.companyInput.setValue(details.company);
        await this.address1Input.setValue(details.address1);
        await this.address2Input.setValue(details.address2);
        await this.countrySelect.selectByVisibleText(details.country);
        await this.stateInput.setValue(details.state);
        await this.cityInput.setValue(details.city);
        await this.zipcodeInput.setValue(details.zipcode);
        await this.mobileInput.setValue(details.mobile);
    }
}
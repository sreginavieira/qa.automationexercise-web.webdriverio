export default class AccountPage {
    public get deleteAccountBtn() { return $('a[href="/delete_account"]'); }
    public get accountDeletedMsg() { return $('h2[data-qa="account-deleted"]'); }
    public get continueBtn() { return $('a[data-qa="continue-button"]'); }
}
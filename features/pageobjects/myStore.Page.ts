class MyStore {
    async openApp() {
        await browser.url('http://automationpractice.com/index.php')
    }
    get signin() { return $('//a[@rel="nofollow"]'); }
    get clickOnSignin() { return $('//a[@rel="nofollow"]'); }
    get headerText() { return $("//h3[@class='page - subheading']"); }
    get text() { return $('//label[@for="email_create"]'); }
    get emailAddress() { return $('//input[@id="email_create"]'); }
    get createAccountButton() { return $('//button[@id="SubmitCreate"]'); }
    get headingtext() { return $('//h3[@class="page-subheading"]'); }
    get pageHeading() { return $('//label[text()="Title"]'); }
    get radioButtonforMR() { return $("//div[@id='uniform-id_gender1']/span//input[@value='1']"); }
    get radioButtonText() { return $('//*[@id="account-creation_form"]/div[1]/div[1]/div[1]/label/text()'); }
    get firstnameText() { return $('//label[@for="customer_firstname"]'); }
    get firstName() { return $("//input[@id='customer_firstname']") }
    get lastnameText() { return $("//label[@for='customer_lastname']"); }
    get lastName() { return $("//input[@id='customer_lastname']"); }
    get passwordText() { return $("//label[@for='passwd']"); }
    get password() { return $("//input[@id='passwd']") }
    get dateOfBirthText() { return $('//div[@class="form-group"]/label'); }
    get dateValue() { return $('//select[@id="days"]');}
    async enteringEmail(email: String) {
        await this.emailAddress.setValue(email);
    }
    async accountButton() {
        await this.createAccountButton.click();
    }
    async clickingRadioButton() {
        await this.radioButtonforMR.click();
    }
    async enterningFirstname(fname: String) {
        fname = "Heath Ledger";
        await this.firstName.setValue(fname);
    }
    async enteringLastname(lname: String) {
        lname = "Joker";
        await this.lastName.setValue(lname)
    }
    async enteringPassword(password: any) {
        password = "motherofdragons"
        await this.password.setValue(password)
    }
    async enteringDate(){
        await this.dateValue.selectByIndex(3);
    }
}
export default new MyStore()
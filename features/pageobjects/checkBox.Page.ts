class CheckBox {
    get checkBoxMenu() { return $('//a[text()="Checkboxes"]'); }
    get checkBoxHeader() { return $('//div[@class="example"]/h3'); }
    get checkBoxSelected() { return $('//*[@id="checkboxes"]/input[2]'); }
    async openApp() {
        await browser.url("https://the-internet.herokuapp.com/");
    }
    async clickOnCheckBoxMenu() {
        await this.checkBoxMenu.click();
    }
}
export default new CheckBox()

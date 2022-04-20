class StatusCodes {
    get statusCodesMenu() {
        return $("//a[text()='Status Codes']");
    }
    get headertext() {
        return $('div.example>h3');
    }
    get footertext() {
        return $('//a[text()="Elemental Selenium"]');
    }
    get hereLink() {
        return $("//a[text()='here']");
    }
    get headingText() {
        return $('//h1');
    }
    get httpLink() {
        return $("//a[text()='HTTP Status Codes']");
    }
    get headingLine() {
        return $('//h2');
    }
    async openApp() {
        await browser.url("https://the-internet.herokuapp.com/");
    }
    async clickStatusCodesMenu() {
        await this.statusCodesMenu.click();
        await this.hereLink.click();
        await this.httpLink.click();
    }
}
export default new StatusCodes()
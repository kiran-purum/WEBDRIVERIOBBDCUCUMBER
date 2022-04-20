class DropDown {
    get dropDownMenu() {
        return $('//a[text()="Dropdown"]');
    }
    get headerText() {
        return $('h3');
    }
    get clickOptionHeading() {
        return $('//*[@id="dropdown"]')
    }
    get optionMessage() {
        return $('//*[@id="dropdown"]/option[1]');
    }
    get clickOption1Element() {
        return $('//*[@id="dropdown"]/option[2]');
    }
    get option1Message() {
        return $('//*[@id="dropdown"]');;
    }
    get clickOptionHeading1() {
        return $('//*[@id="dropdown"]');
    }
    get clickOption2Element() {
        return $('//*[@id="dropdown"]/option[3]')
    }
    get option2Message() {
        return $('//*[@id="dropdown"]');
    }
    async clickondropDownMenu() {
        await this.dropDownMenu.click();
        await this.clickOptionHeading.click();
        await this.clickOptionHeading1.click();
        await this.clickOption1Element.click();
        await this.clickOption2Element.click();
    }
    async openApp() {
        await browser.url('https://the-internet.herokuapp.com/')
    }
}
export default new DropDown()
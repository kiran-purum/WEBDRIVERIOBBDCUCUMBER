import { Given, Then, When } from "@wdio/cucumber-framework";
import checkBoxPage from "../pageobjects/checkBox.Page";


Given("I am on the First Landing Page of Herokuapp", async () => {
    checkBoxPage.openApp();
});
When(/^I click on check box menu$/, async () => {
    await checkBoxPage.clickOnCheckBoxMenu();
});
Then(/^I should be navigated to checkbox Page \"([^\"]*)\"$/, async (checkboxes) => {
    await expect(checkBoxPage.checkBoxHeader).toBeDisplayed(checkboxes);
    expect(browser).toHaveUrlContaining("checkboxes")
});
Then(/^I validate checkbox2 is selected$/, async () => {
    await expect(checkBoxPage.checkBoxSelected).toBeSelected()
});
import { Given, Then, When } from "@wdio/cucumber-framework";
import dropDownPage from "../pageobjects/dropDown.Page";

Given("I am on the Second landing page of herokuapp", async () => {
    dropDownPage.openApp();
})

When(/^I click on the dropdown$/, async () => {
    await dropDownPage.clickondropDownMenu();
});

Then(/^I should be navigated and I see the Header \"([^\"]*)\"$/, async (dropdownlist) => {
    await expect(dropDownPage.headerText).toBeClickable(dropdownlist);
});

When(/^I click on that please select an option$/, async () => {
    await dropDownPage.clickondropDownMenu();
});

Then(/^I can see are options \"([^\"]*)\"$/, async (pleaseselectanoption) => {
    await expect(dropDownPage.optionMessage).toHaveText(pleaseselectanoption);
});

When(/^I click the options of Option 1$/, async () => {
    await dropDownPage.clickondropDownMenu();
});

Then(/^I see the options are \"([^\"]*)\" is selected$/, async (option1) => {
    expect(dropDownPage.option1Message).toBeSelected(option1)
});

When(/^I click on the please select an option$/, async () => {
    await dropDownPage.clickondropDownMenu();
});

When(/^I click the options of Option 2$/, async () => {
    await dropDownPage.clickondropDownMenu();
});

Then(/^I see options \"([^\"]*)\" is selected$/, async (option2) => {
   await expect(dropDownPage.option2Message).toBeSelected(option2)
});
import { Given, Then, When } from "@wdio/cucumber-framework";
import myStorePage from "../pageobjects/myStore.Page";

Given(/^Iam on the Home Page of Mystore Website$/, async () => {
    myStorePage.openApp();
});
Then(/^I should see the text as \"([^\"]*)\"$/, async (signin) => {
    await expect(myStorePage.signin).toHaveText(signin);
});
When(/^I click on sign in$/, async () => {
    await myStorePage.clickOnSignin.click();
});
Then("I should be navigated and see the text as {string}", async (createanaccount) => {
    await expect(myStorePage.headerText).toHaveText(createanaccount)
});
Then(/^I should see Text as \"([^\"]*)\"$/, async (emailaddress) => {
    await expect(myStorePage.text).toHaveText(emailaddress)
});
When(/^I enter the Email Address in text box of Email Address$/, async () => {
    await myStorePage.enteringEmail("kiran@gmail.com");
});
Then(/^I should be navigated and see the \"([^\"]*)\"$/, async (yourpersonalinformation) => {
    await expect(myStorePage.headingtext).toHaveText(yourpersonalinformation);
});
Then(/^I can see the form text as \"([^\"]*)\"$/, async (title) => {
    await expect(myStorePage.pageHeading).toHaveText(title);
});
When(/^I click the radio button of Mr.$/, async () => {
    await myStorePage.clickingRadioButton();
});
Then(/^I can able to see the \"([^\"]*)\" radio is selected$/, async (mr) => {
    await expect(myStorePage.radioButtonText).toHaveText(mr);
});
Then(/^I see the text as \"([^\"]*)\"$/, async (firstname) => {
    await expect(myStorePage.firstnameText).toHaveText(firstname);
});
When(/^I enter the First name it must added$/, async () => {
    await myStorePage.enterningFirstname("Heath Ledger");
});
Then(/^I should the text as \"([^\"]*)\"$/, async (lastname) => {
    await expect(myStorePage.lastnameText).toHaveText(lastname);
});
When(/^I enter the last name is should br filled$/, async () => {
    await myStorePage.enteringLastname("Joker");
});
Then(/^I will see the text as \"([^\"]*)\"$/, async (password) => {
    await expect(myStorePage.passwordText).toHaveText(password)
});
When(/^I enter the password it should be added into the textbox$/, async () => {
    await myStorePage.enteringPassword("motherofdragons")
});
Then(/^I should see the next Text as \"([^\"]*)\"$/, async (dateofbirth) => {
    await expect(myStorePage.dateOfBirthText).toHaveText(dateofbirth)
});
When(/^I click on the days tab it should filled with the random date$/, async () => {
    await myStorePage.enteringDate();
});

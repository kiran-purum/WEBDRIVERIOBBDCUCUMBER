import { When, Then, Given } from "@wdio/cucumber-framework";
import statusCodesPage from "../pageobjects/statusCodes.page";

Given("I am on the First Landing Page of Herokuapp", async () => {
    statusCodesPage.openApp();
});

When(/^I click on the Status Codes menu$/, async () => {
    await statusCodesPage.clickStatusCodesMenu();
});

Then(/^I should see the header \"([^\"]*)\"$/, async (statuscodes) => {
    await expect(statusCodesPage.headertext).toHaveText(statuscodes)
});

// Then(/^I should see the footer text as \"([^\"]*)\"$/, async (elementalselenium) => {
//     await expect(statusCodesPage.footertext).toHaveText(elementalselenium)
// });

When(/^I click on this link here$/, async () => {
    await statusCodesPage.clickStatusCodesMenu();
});

Then(/^I should be navigated to \"([^\"]*)\"$/, async (hypertexttransferprotocolhttpstatuscoderegistry) => {
    await expect(statusCodesPage.headingText).toHaveText(hypertexttransferprotocolhttpstatuscoderegistry);
});

When(/^I click on http status codes$/, async (callback) => {
    await statusCodesPage.clickStatusCodesMenu();
});

Then(/^I should navigate and see the Text as \"([^\"]*)\"$/, async (httpstatuscodes) => {
    await expect(statusCodesPage.headingLine).toHaveText(httpstatuscodes)
});

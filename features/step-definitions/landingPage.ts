import { Given, Then } from "@wdio/cucumber-framework";
import landingPage from "../pageobjects/landing.Page";

Given(/^I am on the Landing Page of Herokuapp$/, async () => {
    landingPage.openApp();
});

Then(/^I should see the Header of landing page \"([^\"]*)\"$/, async (welcometotheinternet) => {
    await expect(landingPage.headerElement).toHaveText(welcometotheinternet);
});

Then(/^I should see the Text of landing page \"([^\"]*)\"$/, async (availableexamples) => {
    await expect(landingPage.text).toHaveText(availableexamples);
});
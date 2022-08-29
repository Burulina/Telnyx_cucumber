import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    commonMethods.checkBaseUrl();
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks on the "Connect on LinkedIn" link in footer', () => {
    homePage.clickLinkedinLink();
});

Then ('A User checks the "Linkedin" site with page about telnyx is opened', () => {
    commonMethods.checkUrlInclude('linkedin.com/company/telnyx/');
});
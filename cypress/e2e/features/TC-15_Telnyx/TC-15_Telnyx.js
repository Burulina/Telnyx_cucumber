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

When ('A User clicks on the "Cookie Policy" link in the footer', () => {
    homePage.clickCookiesPolicyLink();
});


Then ('A User checks the "Cookie Policy" page is opened', () => {
    commonMethods.checkUrlInclude ('/cookie-policy');
});
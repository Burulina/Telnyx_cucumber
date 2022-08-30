import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';

const commonMethods = require ('../../pageObjects/common.methods');
const homePage = require ('../../pageObjects/home.page.js');

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    cy.url().should('eq', 'https://telnyx.com/');
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks on the "Cookie Policy" link in the footer', () => {
    homePage.clickCookiesPolicyLink();
});

Then ('A User checks the "Cookie Policy" page is opened', () => {
    cy.url().should('include', '/cookie-policy');
});
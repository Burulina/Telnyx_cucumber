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

When ('A User clicks on the "Connect on LinkedIn" link in footer', () => {
    homePage.clickLinkedinLink();
});

Then ('A User checks the "Linkedin" site with page about telnyx is opened', () => {
    cy.url().should('include', 'linkedin.com/company/telnyx/');
});
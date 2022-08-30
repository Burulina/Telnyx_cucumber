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

When ('A User clicks the "Call Us" link in header', () => {
    homePage.clickCallUsLink();
});

Then ('A User checks the "Call" dialog is visible', () => {
    homePage.getclickToCallDialog().should('be.visible');
    homePage.getcallSalesButton().should('be.visible').and('contain.text', 'Call Sales');
});
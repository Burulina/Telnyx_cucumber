import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';

const commonMethods = require ('../../pageObjects/common.methods');
const homePage = require ('../../pageObjects/home.page.js');
const contactUsPage = require ('../../pageObjects/contactUs.page.js');

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    cy.url().should('eq', 'https://telnyx.com/');
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks the "Talk to an expert" button in header', () => {
    homePage.clickTalkExpertButton();
});

Then ('A User checks the redirection to page with list "Calling from overseas" phones', () => {
    cy.url().should('include', '/contact-us');
    contactUsPage.getListOverseasPhonesHeading().should('be.visible').and('contain.text', 'Calling from overseas?');
});

And ('A User check list of phone numbers in console', () => {
    contactUsPage.getOverseasPhonesList().should('be.visible').and('have.length',12);
    contactUsPage.consoleLogOverseasPhonesList();
});
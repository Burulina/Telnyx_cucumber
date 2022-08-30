import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';

const commonMethods = require ('../../pageObjects/common.methods');
const homePage = require ('../../pageObjects/home.page.js');
const developersPage = require ('../../pageObjects/developers.page.js');

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    cy.url().should('eq', 'https://telnyx.com/');
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks the "Developer Docs" submenu item in the "Resources" menu item', () => {
    homePage.clickDeveloperDocsSubmenuItem();
});

And ('A User checks the "Developer Docs" page is opened', () => {
    cy.url().should('include', '/developers.telnyx.com/docs');
});

And ('A User clicks the "API v1" button', () => {
    developersPage.clickApiV1Button();
});

Then ('A User checks v1 of API Docs is displayed', () => {
    cy.url().should('include', '/developers.telnyx.com/docs/v1');
    developersPage.getApiDocVersionHeading().should('be.visible').and('contain.text', 'Telnyx API V1 Documentation');
});
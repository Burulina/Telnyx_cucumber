import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
const commonMethods = require ('../../pageObjects/common.methods');
const homePage = require ('../../pageObjects/home.page.js');
const integrationsPage = require ('../../pageObjects/integrations.page.js');

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    cy.url().should('eq', 'https://telnyx.com/');
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks the "Integrations" submenu item in the "Company" menu item', () => {
    homePage.clickIntegrationsSubmenuItem();
});

And ('A User checks the "Integrations" page is opened', () => {
    cy.url().should('include', '/integrations');
});

And ('A User clicks the "Explore Our Marketplace" button', () => {
    integrationsPage.clickExploreMarketButton();
});

Then ('A User checks the "Marketplace" page is opened', () => {
    cy.url().should('include', '/marketplace.telnyx.com');
});

import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";
import { integrationsPage } from "../../pageObjects/integrations.page";

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    commonMethods.checkBaseUrl();
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks the "Integrations" submenu item in the "Company" menu item', () => {
    homePage.clickIntegrationsSubmenuItem();
});

And ('A User checks the "Integrations" page is opened', () => {
    integrationsPage.checkUrlInclude('/integrations');
});

And ('A User clicks the "Explore Our Marketplace" button', () => {
    integrationsPage.clickExploreMarketButton();
});

Then ('A User checks the "Marketplace" page is opened', () => {
    commonMethods.checkUrlInclude('/marketplace.telnyx.com');
});

import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";
import { developersPage } from "../../pageObjects/developers.page";

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    commonMethods.checkBaseUrl();
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks the "Developer Docs" submenu item in the "Resources" menu item', () => {
    homePage.clickDeveloperDocsSubmenuItem();
});

And ('A User checks the "Developer Docs" page is opened', () => {
    developersPage.checkUrlInclude('/developers.telnyx.com/docs');
});

And ('A User clicks the "API v1" button', () => {
    developersPage.clickApiV1Button();
});

Then ('A User checks v1 of API Docs is displayed', () => {
    developersPage.checkUrlInclude('/developers.telnyx.com/docs/v1');
    developersPage.checkApiDocVersionHeading('Telnyx API V1 Documentation');
});
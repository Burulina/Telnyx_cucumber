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

Then ('A User clicks the "Messaging" item in left sidebar and checks filter results', () => {
    developersPage.clickMesaggingSidebarItem();
    developersPage.checkMessagingHeading('Messaging');
});

And ('A User clicks the "Phone Numbers" item in left sidebar and checks filter results', () => {
    developersPage.clickPhoneNumbersSidebarItem();
    developersPage.checkPhoneHeading('Phone Numbers');
});
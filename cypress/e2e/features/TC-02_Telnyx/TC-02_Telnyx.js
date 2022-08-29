import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";
import { contactUsPage } from '../../pageObjects/contactUs.page';

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    commonMethods.checkBaseUrl();
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks the "Talk to an expert" button in header', () => {
    homePage.clickTalkExpertButton();
});

Then ('A User checks the redirection to page with list "Calling from overseas" phones', () => {
    homePage.checkUrlInclude('/contact-us');
    contactUsPage.checkListOverseasPhonesHeading('Calling from overseas?');
});

And ('A User check list of numbers in console', () => {
    contactUsPage.checkOverseasPhonesList();
});
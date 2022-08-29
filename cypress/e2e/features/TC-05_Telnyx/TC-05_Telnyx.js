import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";
import { signUpPage } from "../../pageObjects/signUp.page";

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    commonMethods.checkBaseUrl();
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks on the "SighUp" link in the footer', () => {
    homePage.clickSignUpLink();
});

And ('A User checks the "Sign up" page is opened', () => {
    signUpPage.checkUrlInclude ('/sign-up');
    signUpPage.checkSinUpFormHeading('Create a free account');
});

And ('A User clicks the "Terms and conditions" link', () => {
    signUpPage.clickTermsConditionLink();
});

Then ('A User checks the "Terms and Conditions" page is opened', () => {
    signUpPage.checkUrlInclude ('terms-and-conditions-of-service');
});
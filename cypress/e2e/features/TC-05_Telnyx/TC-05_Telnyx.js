import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';

const commonMethods = require ('../../pageObjects/common.methods');
const homePage = require ('../../pageObjects/home.page.js');
const signUpPage = require ('../../pageObjects/signUp.page.js');

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    cy.url().should('eq', 'https://telnyx.com/');
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks on the "SighUp" link in the footer', () => {
    homePage.clickSignUpLink();
});

And ('A User checks the "Sign up" page is opened', () => {
    cy.url().should('include', '/sign-up');
    signUpPage.getSinUpFormHeading().should('be.visible').and('contain.text', 'Create a free account');
});

And ('A User clicks the "Terms and conditions" link', () => {
    signUpPage.clickTermsConditionLink();
});

Then ('A User checks the "Terms and Conditions" page is opened', () => {
    cy.url().should('include', 'terms-and-conditions-of-service');
});
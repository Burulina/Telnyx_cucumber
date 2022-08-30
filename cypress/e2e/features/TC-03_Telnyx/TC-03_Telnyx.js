import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';

const commonMethods = require ('../../pageObjects/common.methods');
const homePage = require ('../../pageObjects/home.page.js');
const signUpPage = require ('../../pageObjects/signUp.page.js');

let data;
  before(() => {
    cy.fixture('dataSet').then((fData) => {
      data = fData;
    });
  });

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    cy.url().should('eq', 'https://telnyx.com/');
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User fills the "Email" input field with valid email', () => {
    homePage.fillEmailInput(data.valid.email);
});

And ('A User clicks the the "Try for free" button', () => {
    homePage.clickTryForFreeButton();
});

Then ('A User checks the "Sign up" page is opened', () => { 
    cy.url().should('include', '/sign-up?email='+ data.valid.email);
});

And ('A User checks that entered email is displayed in the "Sign Up" form', () => {
    signUpPage.getWorkEmailInput().should('have.value', data.valid.email);
});
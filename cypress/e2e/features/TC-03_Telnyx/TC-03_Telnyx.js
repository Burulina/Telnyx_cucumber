import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";
import { signUpPage } from "../../pageObjects/signUp.page";

let data;
  before(() => {
    cy.fixture('dataSet').then((fData) => {
      data = fData;
    });
  });

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    commonMethods.checkBaseUrl();
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
    signUpPage.checkUrlInclude('/sign-up?email='+ data.valid.email);
});

And ('A User checks that entered email is displayed in the "Sign Up" form', () => {
    signUpPage.checkEmailInputData(data.valid.email);
});
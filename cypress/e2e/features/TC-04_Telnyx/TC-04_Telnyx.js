import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';

const commonMethods = require ('../../pageObjects/common.methods');
const homePage = require ('../../pageObjects/home.page.js');
const contactUsPage = require ('../../pageObjects/contactUs.page.js');

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

When ('A User clicks the "Talk to an expert" button', () => {
    homePage.clickTalkExpertButton();
});

And ('A User checks the "Contact Us" page is opened', () => {
    cy.url().should('include', '/contact-us');
    contactUsPage.getContactUsPageHeading().should('be.visible').and('contain.text', 'Talk to an expert');
});

Then ('A User fills the all mandatory input fields with valid credentials', () => {
    contactUsPage.fillInputs(data.valid.name, data.valid.lastname, data.valid.email, data.valid.phone, data.valid.website, data.AddInfo);
});

And ('A User selects reason for contact and phone code in dropdowns', () => {
    contactUsPage.selectReasonContactDropdown('Support');
    contactUsPage.selectPhoneCodeDropdown('+1242');
});
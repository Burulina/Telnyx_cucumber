import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";
import { contactUsPage } from "../../pageObjects/contactUs.page";

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

When ('A User clicks the "Talk to an expert" button', () => {
    homePage.clickTalkExpertButton();
});

And ('A User checks the "Contact Us" page is opened', () => {
    contactUsPage.checkUrlInclude('/contact-us');
    contactUsPage.checkContactUsPageHeading('Talk to an expert');
});

Then ('A User fills the all mandatory input fields with valid credentials', () => {
    contactUsPage.fillInputs(data.valid.name, data.valid.lastname, data.valid.email, data.valid.phone, data.valid.website, data.AddInfo);
});

And ('A User selects reason for contact and phone code in dropdowns', () => {
    contactUsPage.selectReasonContactDropdown('Support');
    contactUsPage.selectPhoneCodeDropdown('+1242');
});
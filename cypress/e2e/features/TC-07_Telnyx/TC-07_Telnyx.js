import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";
import { partnershipsPage } from "../../pageObjects/partnerships.page";

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

When ('A User clicks the "Partners" submenu item in the "Company" menu item', () => {
    homePage.clickPartnersSubmenuItem();
});

And ('A User checks the "Partnerships" page is opened', () => {
    partnershipsPage.checkUrlInclude('/company/partnerships');
    partnershipsPage.scrollBecomePartnerForm();
    partnershipsPage.checkBecomePartnerFormHeading('Become a Telnyx Partner');
});

Then ('A User fills the all mandatory input fields with valid credentials', () => {
    partnershipsPage.fillInputs(data.valid.name, data.valid.lastname, data.valid.company, data.valid.email, data.valid.phone, data.AddInfo);
});

And ('A User selects partner type in dropdown', () => {
    partnershipsPage.selectPartnerTypeDropdown('Reseller');
});
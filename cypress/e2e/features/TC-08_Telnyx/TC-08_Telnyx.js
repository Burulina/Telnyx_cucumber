import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";
import { integrationsPage } from "../../pageObjects/integrations.page";

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

When ('A User clicks the "Integrations" submenu item in the "Company" menu item', () => {
    homePage.clickIntegrationsSubmenuItem();
});

And ('A User checks the "Integrations" page with "Beta Tester" form is opened', () => {
    integrationsPage.checkUrlInclude('/integrations');
    integrationsPage.scrollBecomeBetaTesterForm();
    integrationsPage.checkBetaTesterFormHeading('Become a Beta Tester');
});

Then ('A User fills the all mandatory input fields with valid credentials', () => {
    integrationsPage.fillInputs(data.valid.name, data.valid.lastname, data.valid.email, data.valid.website, data.valid.company);
});

And ('A User selects use case in dropdown', () => {
    integrationsPage.selectUseCaseDropdown('Call Tracking');
});
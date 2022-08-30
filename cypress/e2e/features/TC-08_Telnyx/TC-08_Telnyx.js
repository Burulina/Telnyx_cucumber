import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';

const commonMethods = require ('../../pageObjects/common.methods');
const homePage = require ('../../pageObjects/home.page.js');
const integrationsPage = require ('../../pageObjects/integrations.page.js');

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

When ('A User clicks the "Integrations" submenu item in the "Company" menu item', () => {
    homePage.clickIntegrationsSubmenuItem();
});

And ('A User checks the "Integrations" page with "Beta Tester" form is opened', () => {
    cy.url().should('include', '/integrations');
    integrationsPage.scrollBecomeBetaTesterForm();
    integrationsPage.getBetaTesterFormHeading().should('be.visible').and('contain.text', 'Become a Beta Tester');
});

Then ('A User fills the all mandatory input fields with valid credentials', () => {
    integrationsPage.fillInputs(data.valid.name, data.valid.lastname, data.valid.email, data.valid.website, data.valid.company);
});

And ('A User selects use case in dropdown', () => {
    integrationsPage.selectUseCaseDropdown('Call Tracking');
});
const commonMethods = require ('./common.methods');

// Selectors
const mesaggingSidebarItem = '[id="docs-desktop-sidebar"] [href="/docs/v2/messaging"]';
const phoneNumbersSidebarItem = '[id="docs-desktop-sidebar"] [href="/docs/v2/numbers"]';
const messagingHeading = '#messaging';
const phoneHeading = '#phone-numbers';
const apiDocVersionHeading = '#telnyx-api-v1-documentation';
const apiButton = '[id="docs-desktop-sidebar"] div>button';

class DevelopersPage {

    getApiDocVersionHeading () {
        return cy.get(apiDocVersionHeading);
    }

    getMessagingHeading () {
        return cy.get(messagingHeading);
    }

    getPhoneHeading () {
        return cy.get(phoneHeading);
    }

    clickMesaggingSidebarItem() {
        commonMethods.clickElem(mesaggingSidebarItem);
    }
      
    clickPhoneNumbersSidebarItem() {
        commonMethods.clickElem(phoneNumbersSidebarItem);
    }

    clickApiV1Button() {
        commonMethods.clickDoubleElem(apiButton, 0);
    }

}

module.exports = new DevelopersPage();
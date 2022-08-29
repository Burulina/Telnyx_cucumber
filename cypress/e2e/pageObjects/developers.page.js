import { CommonMethods } from "./common.methods";

// Selectors
const mesaggingSidebarItem = '[id="docs-desktop-sidebar"] [href="/docs/v2/messaging"]';
const phoneNumbersSidebarItem = '[id="docs-desktop-sidebar"] [href="/docs/v2/numbers"]';
const messagingHeading = '#messaging';
const phoneHeading = '#phone-numbers';
const apiDocVersionHeading = '#telnyx-api-v1-documentation';
const apiButton = '[id="docs-desktop-sidebar"] div>button';

export class DevelopersPage extends CommonMethods {

    constructor() {
        super();
    }

    clickMesaggingSidebarItem() {
        super.clickElem(mesaggingSidebarItem);
    }
      
    clickPhoneNumbersSidebarItem() {
        super.clickElem(phoneNumbersSidebarItem);
    }

    clickApiV1Button() {
        super.clickDoubleElem(apiButton, 0);
    }

    checkMessagingHeading(text) {
        super.checkVisibilityContainText(messagingHeading, text);
    }

    checkPhoneHeading(text) {
        super.checkVisibilityContainText(phoneHeading, text);
    }

    checkApiDocVersionHeading(text) {
        super.checkVisibilityContainText(apiDocVersionHeading, text);
    }

}

export const developersPage = new DevelopersPage();
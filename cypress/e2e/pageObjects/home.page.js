const commonMethods = require ('./common.methods');

// Selectors
const tryForFreeButton = 'button[type="submit"]';
const callSalesButton = '[role="dialog"] [type="button"]';
const talkExpertButton = 'li>div>a[href="/contact-us"]';
const clickToCallDialog = 'div[role="dialog"]';
const blogSubmenuItem = 'header [href="/resources"]';
const integrationsSubmenuItem = 'a[href="/integrations"]';
const developerDocsSubmenuItem = 'header [href*="/developers.telnyx.com/docs"]';
const partnersSubmenuItem = 'a[href="/company/partnerships"]';
const emailInput = 'input[type="email"]';
const callUsLink = 'header [type=button]';
const callingOverseasLink = 'a[href="/contact-us#intl-tel-list"]';
const linkedinLink = 'a[href="https://www.linkedin.com/company/telnyx/"]';
const cookiesPolicyLink = 'a[href="/cookie-policy"]';
const signUpLink = 'footer [href="/sign-up"]';


class HomePage {

    getclickToCallDialog () {
        return cy.get(clickToCallDialog);
    }

    getcallSalesButton () {
        return cy.get(callSalesButton);
    }

    fillEmailInput(text) {
        commonMethods.typeInput(emailInput, text);
    }
    
    clickTryForFreeButton() {
        commonMethods.clickElem(tryForFreeButton);
    }

    clickTalkExpertButton() {
        commonMethods.clickElem(talkExpertButton);
    }

    clickSignUpLink() {
        commonMethods.clickElem(signUpLink);
    }

    clickCallingOverseasLink() {
        commonMethods.clickHoverElem(callingOverseasLink);
    }

    clickCallUsLink() {
        commonMethods.clickElem(callUsLink);
    }

    clickLinkedinLink() {
        commonMethods.clickElemNewTab(linkedinLink);
    }

    clickCookiesPolicyLink() {
        commonMethods.clickElem(cookiesPolicyLink);
    }
    
    clickIntegrationsSubmenuItem() {
        commonMethods.clickHoverElem(integrationsSubmenuItem);
    }

    clickBlogSubmenuItem() {
        commonMethods.clickHoverElem(blogSubmenuItem);
    }

    clickPartnersSubmenuItem() {
        commonMethods.clickHoverElem(partnersSubmenuItem);
    }

    clickDeveloperDocsSubmenuItem() {
        commonMethods.clickHoverElem(developerDocsSubmenuItem);
    }


}

module.exports = new HomePage ();
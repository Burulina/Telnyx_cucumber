const commonMethods = require ('./common.methods');

// Selectors
const workEmailInput = '#email';
const termsConditionLink = 'a[href="/terms-and-conditions-of-service"]';
const sinUpFormHeading = 'h1[class*=Text]';

class SignUpPage {

    getWorkEmailInput () {
        return cy.get(workEmailInput);
    }

    getSinUpFormHeading () {
        return cy.get(sinUpFormHeading);
    }

    clickTermsConditionLink() {
        commonMethods.clickElemNewTab(termsConditionLink);
    }

}

module.exports = new SignUpPage ();
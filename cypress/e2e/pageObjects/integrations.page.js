const commonMethods = require ('./common.methods');

// Selectors
const exploreMarketButton = 'div>[href="https://marketplace.telnyx.com"]';
const submitButton = 'button[type="submit"]';
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const emailInput  = '#Email';
const websiteInput = '#Website';
const industryInput  = '#Industry';
const betaTesterFormHeading = 'section>h3';
const useCaseDropdown = '#Use_Case_Form__c';
const becomeBetaTesterForm = '#become-a-beta-tester';
const emailErrorMessage = '#ValidMsgEmail';

class IntegrationsPage {

    getBetaTesterFormHeading () {
        return cy.get(betaTesterFormHeading);
    }
    
    getEmailErrorMessage () {
        return cy.get(emailErrorMessage);
    }

    fillInputs (firstname, lastname, email, website, industry) {
        commonMethods.typeInput(firstNameInput, firstname);
        commonMethods.typeInput(lastNameInput, lastname);
        commonMethods.typeInput(emailInput, email);
        commonMethods.typeInput(websiteInput, website);
        commonMethods.typeInput(industryInput, industry);
    }

    clickSubmitButton() {
        commonMethods.clickElem(submitButton);
    }

    clickExploreMarketButton() {
        commonMethods.clickDoubleElem(exploreMarketButton, 0);
    }

    selectUseCaseDropdown (option) {
        commonMethods.selectDropdown(useCaseDropdown, option);
    }

    scrollBecomeBetaTesterForm () {
        commonMethods.scrolltoElem(becomeBetaTesterForm);
    }    

}

module.exports = new IntegrationsPage ();
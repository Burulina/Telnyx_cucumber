import { CommonMethods } from "./common.methods";

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

export class IntegrationsPage extends CommonMethods {

    constructor() {
        super();
    }

    fillInputs (firstname, lastname, email, website, industry) {
        super.typeInput(firstNameInput, firstname);
        super.typeInput(lastNameInput, lastname);
        super.typeInput(emailInput, email);
        super.typeInput(websiteInput, website);
        super.typeInput(industryInput, industry);
    }

    clickSubmitButton() {
        super.clickElem(submitButton);
    }

    clickExploreMarketButton() {
        super.clickDoubleElem(exploreMarketButton, 0);
    }

    checkBetaTesterFormHeading (text){
        super.checkVisibilityContainText(betaTesterFormHeading, text);
    }

    checkEmailErrorMessage (text){
        super.checkVisibilityContainText(emailErrorMessage, text);
    }

    selectUseCaseDropdown (option) {
        super.selectDropdown(useCaseDropdown, option);
    }

    scrollBecomeBetaTesterForm () {
        super.scrolltoElem(becomeBetaTesterForm);
    }    

}

export const integrationsPage = new IntegrationsPage();
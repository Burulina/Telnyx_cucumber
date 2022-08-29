import { CommonMethods } from "./common.methods";

// Selectors
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const companyInput = '#Company';
const emailInput  = '#Email';
const phoneNumberInput  = '#Form_Phone__c';
const addInfoTextForm = '#Form_Additional_Information__c';
const becomePartnerFormHeading = 'section>h3';
const partnerTypeDropdown = '#Partner_Type__c';
const becomePartnerForm = '#become-a-partner';

export class PartnershipsPage extends CommonMethods {

    constructor() {
        super();
    }

    fillInputs (firstname, lastname, company, email, phone, addInfo) {
        super.typeInput(firstNameInput, firstname);
        super.typeInput(lastNameInput, lastname);
        super.typeInput(companyInput, company);
        super.typeInput(emailInput, email);
        super.typeInput(phoneNumberInput, phone);
        super.typeInput(addInfoTextForm, addInfo);
    }

    checkBecomePartnerFormHeading (text){
        super.checkVisibilityContainText(becomePartnerFormHeading, text);
    }

    selectPartnerTypeDropdown (option) {
        super.selectDropdown(partnerTypeDropdown, option);
    }
  
    scrollBecomePartnerForm () {
        super.scrolltoElem(becomePartnerForm);
    } 

}

export const partnershipsPage = new PartnershipsPage();
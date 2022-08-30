const commonMethods = require ('./common.methods');

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

class PartnershipsPage {

    getBecomePartnerFormHeading () {
        return cy.get(becomePartnerFormHeading);
    }

    fillInputs (firstname, lastname, company, email, phone, addInfo) {
        commonMethods.typeInput(firstNameInput, firstname);
        commonMethods.typeInput(lastNameInput, lastname);
        commonMethods.typeInput(companyInput, company);
        commonMethods.typeInput(emailInput, email);
        commonMethods.typeInput(phoneNumberInput, phone);
        commonMethods.typeInput(addInfoTextForm, addInfo);
    }

    selectPartnerTypeDropdown (option) {
        commonMethods.selectDropdown(partnerTypeDropdown, option);
    }
  
    scrollBecomePartnerForm () {
        commonMethods.scrolltoElem(becomePartnerForm);
    } 

}

module.exports = new PartnershipsPage ();
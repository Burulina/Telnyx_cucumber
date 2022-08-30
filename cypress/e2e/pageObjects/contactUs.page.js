const commonMethods = require ('./common.methods');

// Selectors
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const emailInput  = '#Email';
const companyWebsiteInput  = '#Website';
const phoneNumberInput  = '#Phone_Number_Base__c';
const addInfoTextForm = '#Form_Additional_Information__c';
const contactUsPageHeading = 'header>h1';
const listOverseasPhonesHeading = 'header>h2';
const reasonContactDropdown = '#Reason_for_Contact__c';
const phoneCodeDropdown = '#Phone_Number_Extension__c';
const overseasPhonesList = '[id="intl-tel-list"] ul>li';

class ContactUsPage {

    getContactUsPageHeading () {
        return cy.get(contactUsPageHeading);
    }

    getOverseasPhonesList () {
        return cy.get(overseasPhonesList);
    }

    getListOverseasPhonesHeading () {
        return cy.get(listOverseasPhonesHeading);
    }

    fillInputs (firstname, lastname, email, phone, website, addInfo) {
        commonMethods.typeInput(firstNameInput, firstname);
        commonMethods.typeInput(lastNameInput, lastname);
        commonMethods.typeInput(emailInput, email);
        commonMethods.typeInput(phoneNumberInput, phone);
        commonMethods.typeInput(companyWebsiteInput, website);
        commonMethods.typeInput(addInfoTextForm, addInfo);
    }

    selectReasonContactDropdown (option) {
        commonMethods.selectDropdown(reasonContactDropdown, option);
    }

    selectPhoneCodeDropdown (option) {
        commonMethods.selectDropdown(phoneCodeDropdown, option);
    }

    consoleLogOverseasPhonesList() {
        cy.get(overseasPhonesList).each(($el, index, $list) => {
        const text=$el.text();
        cy.log(text);
        })
    }

}

module.exports = new ContactUsPage ();
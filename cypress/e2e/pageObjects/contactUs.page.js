import { CommonMethods } from "./common.methods";

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

export class ContactUsPage extends CommonMethods {

    constructor() {
        super();
    }

    fillInputs (firstname, lastname, email, phone, website, addInfo) {
        super.typeInput(firstNameInput, firstname);
        super.typeInput(lastNameInput, lastname);
        super.typeInput(emailInput, email);
        super.typeInput(phoneNumberInput, phone);
        super.typeInput(companyWebsiteInput, website);
        super.typeInput(addInfoTextForm, addInfo);
    }

    checkContactUsPageHeading (text){
        super.checkVisibilityContainText(contactUsPageHeading, text);
    }

    checkListOverseasPhonesHeading (text){
        super.checkVisibilityContainText(listOverseasPhonesHeading, text);
    }

    selectReasonContactDropdown (option) {
        super.selectDropdown(reasonContactDropdown, option);
    }

    selectPhoneCodeDropdown (option) {
        super.selectDropdown(phoneCodeDropdown, option);
    }

    checkOverseasPhonesList() {
        cy.get(`${overseasPhonesList}:visible`).should('have.length',12);
        cy.get(overseasPhonesList).each(($el, index, $list) => {
        const text=$el.text();
        cy.log(text);
        })
    }

}

export const contactUsPage = new ContactUsPage();
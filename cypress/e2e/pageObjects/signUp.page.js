import { CommonMethods } from "./common.methods";

// Selectors
const workEmailInput = '#email';
const termsConditionLink = 'a[href="/terms-and-conditions-of-service"]';
const sinUpFormHeading = 'h1[class*=Text]';

export class SignUpPage extends CommonMethods {

    constructor() {
        super();
    }

    checkSinUpFormHeading (text){
        super.checkVisibilityContainText(sinUpFormHeading, text);
    }

    checkEmailInputData (text){
        super.checkInputdata(workEmailInput, text);
    }

    clickTermsConditionLink() {
        super.clickElemNewTab(termsConditionLink);
    }

}

export const signUpPage = new SignUpPage();
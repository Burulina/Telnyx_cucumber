import { CommonMethods } from "./common.methods";

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


export class HomePage extends CommonMethods {

    constructor() {
        super();
    };

    fillEmailInput(text) {
        super.typeInput(emailInput, text);
    }
    
    clickTryForFreeButton() {
        super.clickElem(tryForFreeButton);
    }

    clickTalkExpertButton() {
        super.clickElem(talkExpertButton);
    }

    clickSignUpLink() {
        super.clickElem(signUpLink);
    }

    clickCallingOverseasLink() {
    super.clickHoverElem(callingOverseasLink);
    }

    clickCallUsLink() {
        super.clickElem(callUsLink);
    }

    clickLinkedinLink() {
        super.clickElemNewTab(linkedinLink);
    }

    clickCookiesPolicyLink() {
        super.clickElem(cookiesPolicyLink);
    }
    
    clickIntegrationsSubmenuItem() {
        super.clickHoverElem(integrationsSubmenuItem);
    }

    clickBlogSubmenuItem() {
        super.clickHoverElem(blogSubmenuItem);
    }

    clickPartnersSubmenuItem() {
        super.clickHoverElem(partnersSubmenuItem);
    }

    clickDeveloperDocsSubmenuItem() {
        super.clickHoverElem(developerDocsSubmenuItem);
    }

    checkclickToCallDialog () {
        super.checkVisibility(clickToCallDialog);
    }

    checkCallSalesButton (text) {
        super.checkVisibilityContainText(callSalesButton, text);
    }

}

export const homePage = new HomePage();
// Selectors
const closeCookiesButton = '[aria-label="close and deny"]';
const baseUrl = 'https://telnyx.com/';

export class CommonMethods {

    constructor () {

    }

    closeCookiesForm () {
        cy.get("body").then(($body) => {
            if ($body.find(closeCookiesButton).length > 0) {
                this.clickElem(closeCookiesButton);
            }
          });
       
    }

    clickElem (elem) {
        cy.get(elem).click();
    }

    clickDoubleElem (elem, num) {
        cy.get(elem).eq(num).click();
    }

    clickHoverElem (elem) {
        cy.get(elem).click({force:true});
    }

    clickElemNewTab (elem) {
        cy.get(elem).invoke('removeAttr', 'target').click();
    }

    selectDropdown (elem, option) {
        cy.get(elem).select(option);
    }

    scrolltoElem (elem) {
        cy.get(elem).scrollIntoView();
    }

    typeInput (elem, text) {
        cy.get(elem).type(text);
    }

    checkVisibilityContainText (elem, text){
        cy.get(elem).should('be.visible').and('contain.text', text);
    }

    checkVisibility (elem) {
        cy.get(elem).should('be.visible');
    }

    checkUrlInclude (urlValue){
        cy.url().should('include', urlValue);
    }

    checkBaseUrl (){
        cy.url().should('eq', baseUrl);
    }

    checkInputdata (elem, text) {
        cy.get(elem).should('have.value', text);
      };

}

export const commonMethods = new CommonMethods();



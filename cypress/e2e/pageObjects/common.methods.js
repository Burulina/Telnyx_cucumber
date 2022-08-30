// Selectors
const closeCookiesButton = '[aria-label="close and deny"]';

class CommonMethods {

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

}

module.exports = new CommonMethods();
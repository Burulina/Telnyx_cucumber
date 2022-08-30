const commonMethods = require ('./common.methods');

// Selectors
const newProdFeaturesButton = 'div[id="filter-by-content"]~ul>li:nth-child(1)>button';
const blogPageHeading = 'div>h1';
const searchResultHeading = '[id="articles"]>div[class*="Text"]';
const searchInput = '#search';
const newsArticlesTopics = 'header>span';

class BlogPage {

    getBlogPageHeading () {
        return cy.get(blogPageHeading);
    }

    getNewProdFeaturesButton () {
        return cy.get(newProdFeaturesButton);
    }

    getSearchResultHeading () {
        return cy.get(searchResultHeading);
    }

    fillSearchInput (text) {
        commonMethods.typeInput(searchInput, text);
    }

    clickNewProdFeaturesButton() {
        commonMethods.clickElem(newProdFeaturesButton);
    }

    checkFilterContent (data) {
        cy.get(newsArticlesTopics).each(($el, index, $list) => {
            const Text= $el.text();
            expect(Text).to.contains(data);
        })
    }
 
}

module.exports = new BlogPage ();
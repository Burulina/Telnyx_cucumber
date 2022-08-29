import { CommonMethods } from "./common.methods";

// Selectors
const newProdFeaturesButton = 'div[id="filter-by-content"]~ul>li:nth-child(1)>button';
const blogPageHeading = 'div>h1';
const searchResultHeading = '[id="articles"]>div[class*="Text"]';
const searchInput = '#search';
const newsArticlesTopics = 'header>span';

export class BlogPage extends CommonMethods {

    constructor() {
        super();
    }

    fillSearchInput (text) {
        super.typeInput(searchInput, text);
    }

    clickNewProdFeaturesButton() {
        super.clickElem(newProdFeaturesButton);
    }

    checkBlogPageHeading (text) {
        super.checkVisibilityContainText(blogPageHeading, text);
    }

    checkSearchResult (text) {
        super.checkVisibilityContainText(searchResultHeading, text);
    }
    
    checkNewProdFeaturesButton (attr, value) {
        cy.get(newProdFeaturesButton).should('have.attr', attr, value);
    }

    checkFilterContent (data) {
        cy.get(newsArticlesTopics).each(($el, index, $list) => {
            const Text= $el.text();
            expect(Text).to.contains(data);
        })
    }
 
}

export const blogPage = new BlogPage();
import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';

const commonMethods = require ('../../pageObjects/common.methods');
const homePage = require ('../../pageObjects/home.page.js');
const blogPage = require ('../../pageObjects/blog.page.js');

let data;
  before(() => {
    cy.fixture('dataSet').then((fData) => {
      data = fData;
    });
  });

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    cy.url().should('eq', 'https://telnyx.com/');
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks the "Blog" submenu item in the "Resources" menu item', () => {
    homePage.clickBlogSubmenuItem();
});

And ('A User checks the "Blog" page is opened', () => {
    cy.url().should('include', '/resources');
    blogPage.getBlogPageHeading().should('be.visible').and('contain.text', 'Blog');
});

And ('A User fills search input with data and tap "Enter"', () => {
    blogPage.fillSearchInput(data.search + '{enter}');
});

Then ('A User checks the results of searching', () => {
    cy.url().should('include', data.search);
    blogPage.getSearchResultHeading().should('be.visible').and('contain.text', data.search);
});
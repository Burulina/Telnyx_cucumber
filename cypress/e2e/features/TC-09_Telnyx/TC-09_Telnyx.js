import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";
import { blogPage } from "../../pageObjects/blog.page";

let data;
  before(() => {
    cy.fixture('dataSet').then((fData) => {
      data = fData;
    });
  });

Given ('A User opens a telnyx.com main page', () => {
    cy.visit('https://telnyx.com/');
    commonMethods.checkBaseUrl();
});

And ('If the cookies window is opened User closes it', () => {
    commonMethods.closeCookiesForm();
});

When ('A User clicks the "Blog" submenu item in the "Resources" menu item', () => {
    homePage.clickBlogSubmenuItem();
});

And ('A User checks the "Blog" page is opened', () => {
    blogPage.checkUrlInclude('/resources');
    blogPage.checkBlogPageHeading('Blog');
});

And ('A User fills search input with data and tap "Enter"', () => {
    blogPage.fillSearchInput(data.search + '{enter}');
});

Then ('A User checks the results of searching', () => {
    blogPage.checkUrlInclude(data.search);
    blogPage.checkSearchResult(data.search);
});
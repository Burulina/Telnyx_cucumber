import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import { commonMethods } from "../../pageObjects/common.methods";
import { homePage } from "../../pageObjects/home.page.js";
import { blogPage } from "../../pageObjects/blog.page";

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

And ('A User clicks the "New Products & Features" button', () => {
    blogPage.clickNewProdFeaturesButton();
});

Then ('A User checks the "New Products & Features" button is focused', () => {
    blogPage.checkNewProdFeaturesButton('aria-checked', 'true');
});

And ('A User checks the results of filter by content', () => {
    blogPage.checkFilterContent('New Products & Features');
});   



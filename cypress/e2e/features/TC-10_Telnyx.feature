Feature: TC-10_Telnyx_test_project

Scenario: Check ability to filter news by content on the "Blog" page

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Blog" submenu item in the "Resources" menu item
And A User checks the "Blog" page is opened
And A User clicks the "New Products & Features" button
Then A User checks the "New Products & Features" button is focused
And A User checks the results of filter by content
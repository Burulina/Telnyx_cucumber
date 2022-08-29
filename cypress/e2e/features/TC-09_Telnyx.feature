Feature: TC-09_Telnyx_test_project

Scenario: Search for news on the "Blog" page

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Blog" submenu item in the "Resources" menu item
And A User checks the "Blog" page is opened
And A User fills search input with data and tap "Enter"
Then A User checks the results of searching
Feature: TC-14_Telnyx_test_project

Scenario: Choose version of API Docs on "Developers" page 

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Developer Docs" submenu item in the "Resources" menu item
And A User checks the "Developer Docs" page is opened
And A User clicks the "API v1" button
Then A User checks v1 of API Docs is displayed
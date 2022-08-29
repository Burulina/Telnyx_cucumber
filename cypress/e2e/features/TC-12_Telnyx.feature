Feature: TC-12_Telnyx_test_project

Scenario: Check redirection to telnyx marketplace page from the "Integrations" page

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Integrations" submenu item in the "Company" menu item
And A User checks the "Integrations" page is opened
And A User clicks the "Explore Our Marketplace" button
Then A User checks the "Marketplace" page is opened
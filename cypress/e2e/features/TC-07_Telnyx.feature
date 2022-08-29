Feature: TC-07_Telnyx_test_project

Scenario: Check ability to become telnyx partner through contact form on the "Partnerships" page

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Partners" submenu item in the "Company" menu item
And A User checks the "Partnerships" page is opened
Then A User fills the all mandatory input fields with valid credentials
And A User selects partner type in dropdown 
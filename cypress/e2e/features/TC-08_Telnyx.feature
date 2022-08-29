Feature: TC-08_Telnyx_test_project

Scenario: Check ability to become a Beta Tester through contact form on the "Integrations" page

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Integrations" submenu item in the "Company" menu item
And A User checks the "Integrations" page with "Beta Tester" form is opened
Then A User fills the all mandatory input fields with valid credentials
And A User selects use case in dropdown
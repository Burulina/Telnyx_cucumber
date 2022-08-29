Feature: TC-11_Telnyx_test_project

Scenario: Check ability to submit "Beta Tester" form with invalid email

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Integrations" submenu item in the "Company" menu item
And A User checks the "Integrations" page with "Beta Tester" form is opened
And A User fills the email field with invalid credentials, other fields - with valid credentials
Then A User clicks the "Submit" button and checks error message
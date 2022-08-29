Feature: TC-04_Telnyx_test_project

Scenario: Check ability to ask question through contact form on the "Contact Us" page

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Talk to an expert" button
And A User checks the "Contact Us" page is opened
Then A User fills the all mandatory input fields with valid credentials
And A User selects reason for contact and phone code in dropdowns  
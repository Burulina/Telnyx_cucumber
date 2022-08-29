Feature: TC-05_Telnyx_test_project

Scenario: Check redirection to Terms and conditions information from Sign Up page

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks on the "SighUp" link in the footer
And A User checks the "Sign up" page is opened
And A User clicks the "Terms and conditions" link 
Then A User checks the "Terms and Conditions" page is opened

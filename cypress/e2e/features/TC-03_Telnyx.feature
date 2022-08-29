Feature: TC-03_Telnyx_test_project

Scenario: Check redirection to the "Sign Up" page after clicking "Try for free" button with valid email

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User fills the "Email" input field with valid email
And A User clicks the the "Try for free" button
Then A User checks the "Sign up" page is opened
And A User checks that entered email is displayed in the "Sign Up" form 
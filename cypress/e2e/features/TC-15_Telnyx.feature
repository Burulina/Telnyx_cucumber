Feature: TC-15_Telnyx_test_project

Scenario: Check redirection to Cookie Policy information from footer

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks on the "Cookie Policy" link in the footer 
Then A User checks the "Cookie Policy" page is opened
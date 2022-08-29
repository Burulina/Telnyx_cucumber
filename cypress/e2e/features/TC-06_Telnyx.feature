Feature: TC-06_Telnyx_test_project

Scenario: Check redirection to the "Linkedin" site from footer

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks on the "Connect on LinkedIn" link in footer
Then A User checks the "Linkedin" site with page about telnyx is opened
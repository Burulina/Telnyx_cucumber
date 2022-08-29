Feature: TC-01_Telnyx_test_project

Scenario: Check ability to activate the "Call" dialog from header of Homepage

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Call Us" link in header
Then A User checks the "Call" dialog is visible  
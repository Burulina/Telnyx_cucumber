Feature: TC-02_Telnyx_test_project

Scenario: Check ability to get numbers for "Calling from overseas"

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Talk to an expert" button in header
Then A User checks the redirection to page with list "Calling from overseas" phones 
And A User check list of numbers in console   
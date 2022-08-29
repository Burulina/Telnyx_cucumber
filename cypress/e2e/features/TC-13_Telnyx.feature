Feature: TC-13_Telnyx_test_project

Scenario: Check filter Developer docs by category 

Given A User opens a telnyx.com main page
And If the cookies window is opened User closes it
When A User clicks the "Developer Docs" submenu item in the "Resources" menu item
And A User checks the "Developer Docs" page is opened
Then A User clicks the "Messaging" item in left sidebar and checks filter results
And A User clicks the "Phone Numbers" item in left sidebar and checks filter results
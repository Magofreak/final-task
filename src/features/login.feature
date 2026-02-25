Feature: Login Portal for Sauce Demo

Scenario: Username and Password are asked before logging in

Given I am in the Login Portal for Sauce Demo
When I enter any username and password
And I clear both fields before pressing the Login button
Then I see the following error message "Username is required"

Scenario: Password is asked before logging in

Given I am in the Login Portal for Sauce Demo
When I enter any username and password
And I clear password field before pressing the Login button
Then I see the following error message "Password is required"

Scenario: Successful log in

Given I am in the Login Portal for Sauce Demo
When I enter accepted username and password
Then I am taken to inventory page
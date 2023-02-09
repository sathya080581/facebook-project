	@Login
Feature: To validate login functionslity of facebook application
	Background:
	Given User have enter facebook login through chrome browser
		
		@smoke @sanity
		Scenario: To validate login using invalid username and invalid password
		
		When User enter invalid username and invalid password
				|ashok123@gmail.com|ashok|python123@gmail.com|python|
		And User click the login button
		Then User should be in invalid credential page
	
		@smoke  @regression
		Scenario: To validate login using invalid username and invalid password
		
		When User enter invalid username and invalid password
		|jira|jira123@gmail.com|jira123|
		|selenium|selenium123@mail.com|selenium123|
		And User click the login button
		Then User should be in invalid credential page
		

Feature: Login Test
  As user I want to login into nop commerce website

  Scenario: User should navigate to login page Successfully
    Given I am on Home Page
    When  I click on login link
    Then I should navigate to login page successfully and see "Welcome, Please Sign In!"

  Scenario: verifyTheErrorMessageWithInValidCredentials
    Given I am on Home Page
    When  I click on login link
    And   I enter email "asd@gmail.com"
    And   I enter password "2345"
    And   I click on login button
    Then  Verify error message

   Scenario: verifyThatUserShouldLogInSuccessFullyWithValidCredentials
     Given I am on Home Page
     When  I click on login link
     And   I enter email "diva123@gmail.com"
     And   I enter password "Div123456"
     Then  I click on login button

   Scenario: VerifyThatUserShouldLogOutSuccessFully
     Given I am on Home Page
     When  I click on login link
     And   I enter email "diva123@gmail.com"
     And   I enter password "Div123456"
     And   I click on login button
     And   I click on Logout button
     Then  I verify login link display


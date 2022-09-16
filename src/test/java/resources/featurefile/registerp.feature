Feature: RegisterPage Test

  As I want to click register page

  Scenario: verifyUserShouldNavigateToRegisterPageSuccessfully

    Given I am on Home Page
    When  I click a register page

  Scenario: verifyThatFirstNameLastNameEmailPasswordAndConfirmPasswordFieldsAreMandatory

    Given I am on Home Page
    When  I click a register page
    And   I click on register button
    And   I Verify the error message First name is required
    And   I Verify the error message Last name is required
    And   I Verify the error message Email is required
    And   I Verify the error message Password is required
    And   I Verify the error message Confirm Password is required

   Scenario: verifyThatUserShouldCreateAccountSuccessfully

     Given I am on Home Page
     When  I click a register page
     And   I select gender female
     And   I enter firstname
     And   I enter lastname
     And   I select day
     And   I select month
     And   I select year
     And   I enter email
     And   I enter password
     And   I enter confirm password
     And   I click on register button



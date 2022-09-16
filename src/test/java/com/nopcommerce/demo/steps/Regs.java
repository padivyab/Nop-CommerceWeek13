package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;

public class Regs {
    @When("^I click a register page$")
    public void iClickARegisterPage() {

        new HomePage().clickRegisterLink();

    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().ClickRegisterButton();

    }

    @And("^I Verify the error message First name is required$")
    public void iVerifyTheErrorMessageFirstNameIsRequired() {
        new RegisterPage().getValidationErrorMessageForField("FirstName");

    }

    @And("^I Verify the error message Last name is required$")
    public void iVerifyTheErrorMessageLastNameIsRequired() {

        new RegisterPage().getValidationErrorMessageForField("LastName");
    }

    @And("^I Verify the error message Email is required$")
    public void iVerifyTheErrorMessageEmailIsRequired() {

        new RegisterPage().getValidationErrorMessageForField("Email");
    }

    @And("^I Verify the error message Password is required$")
    public void iVerifyTheErrorMessagePasswordIsRequired() {

        new RegisterPage().getValidationErrorMessageForField("Password");
    }

    @And("^I Verify the error message Confirm Password is required$")
    public void iVerifyTheErrorMessageConfirmPasswordIsRequired() {
        new RegisterPage().getValidationErrorMessageForField("ConfirmPassword");
    }

    @And("^I select gender female$")
    public void iSelectGenderFemale() throws InterruptedException {
        Thread.sleep(1000);
        new RegisterPage().selectGenderf();
        Thread.sleep(1000);

    }

    @And("^I enter firstname$")
    public void iEnterFirstname() throws InterruptedException {
        new RegisterPage().EnterFirstName();
        Thread.sleep(1000);
    }

    @And("^I enter lastname$")
    public void iEnterLastname() throws InterruptedException {
        new RegisterPage().EnterLastName();
        Thread.sleep(1000);
    }

    @And("^I select day$")
    public void iSelectDay() throws InterruptedException {
        new RegisterPage().SelectDayBirthday();
        Thread.sleep(1000);
    }

    @And("^I select month$")
    public void iSelectMonth() throws InterruptedException {
        new RegisterPage().SelectMonthBirthday();
        Thread.sleep(1000);
    }

    @And("^I select year$")
    public void iSelectYear() throws InterruptedException {
        new RegisterPage().SelectYearBirthday();
        Thread.sleep(1000);
    }

    @And("^I enter email$")
    public void iEnterEmail() throws InterruptedException {
        new RegisterPage().EnterEmail();
        Thread.sleep(1000);
    }

    @And("^I enter password$")
    public void iEnterPassword() throws InterruptedException {
        new RegisterPage().EnterPassword();
        Thread.sleep(1000);
    }

    @And("^I enter confirm password$")
    public void iEnterConfirmPassword() throws InterruptedException {
        new RegisterPage().EnterConfirmPassword();
        Thread.sleep(1000);

    }
}

package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully and see \"([^\"]*)\"$")
    public void iShouldNavigateToLoginPageSuccessfullyAndSee(String text)  {
        String welcomeMessage=new LoginPage().getWelcomeText();
        Assert.assertEquals(text,welcomeMessage,"Verifying welcome message");

    }


    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)
    {
        //new LoginPage().enterEmailId(email);
        new LoginPage().EnterEmail(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String pass)
    {
        new LoginPage().EnterPassword(pass);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {

        new LoginPage().ClickOnLoginButton();

    }

    @Then("^Verify error message$")
    public void verifyErrorMessage() {
        String actualText = new RegisterPage().getErrorMessage();
        String expectedText = "Login was unsuccessful. Please correct the errors and try again.\n" +
                "No customer account found";
        Assert.assertEquals(actualText, expectedText);
    }

    @And("^I click on Logout button$")
    public void iClickOnLogoutButton() {
        new LoginPage().clickOnLogout();

    }

    @Then("^I verify login link display$")
    public void iVerifyLoginLinkDisplay() {

        String actualMsg1 = new HomePage().VerifyLoginLink();
        String expectedMsg1 = "Log in";
        Assert.assertEquals(actualMsg1,expectedMsg1);

    }
}

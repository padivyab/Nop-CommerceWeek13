package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import javax.annotation.CheckForNull;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }
    //public static String email = getRandomString(3) + "@gmail.com";


    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;

    @CacheLookup
    @FindBy(id = "Email")
    WebElement emailField;

    @CacheLookup
    @FindBy(name = "Password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement clickloginButton;

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-logout']")
    WebElement clickLogout;

    public String getWelcomeText() {
        String message = getTextFromElement(welcomeText);
        log.info("Getting text from : " + welcomeText.toString());
        return message;
    }
    /*public void enterEmailId(String email) {
        sendTextToElement(emailField,"abc"+LoginPage.email);
    }*/
    public void EnterEmail(String email)
    {
        sendTextToElement(emailField,email);

    }
    public void EnterPassword(String pass)
    {
        sendTextToElement(passwordField,pass);

    }
    public void ClickOnLoginButton()
    {
        clickOnElement(clickloginButton);

    }
    public void clickOnLogout()
    {
        clickOnElement(clickLogout);

    }

}

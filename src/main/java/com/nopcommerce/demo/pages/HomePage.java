package com.nopcommerce.demo.pages;


import com.nopcommerce.demo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import javax.annotation.CheckForNull;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "Log in")
    WebElement loginLink;

    /*@CacheLookup
    @FindBy(xpath = "//a[@class='ico-logout']")
    WebElement logoutLink;*/
    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-logout']")
    WebElement VerifyLogoutLink;

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-login']")
    WebElement LoginLink;

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-register']")
    WebElement register;

    public void clickOnLoginLink() {
        clickOnElement(loginLink);
        log.info("Clicking on login link : " + loginLink.toString());
    }
    public String verifylogoutlink()
    {
        return getTextFromElement(VerifyLogoutLink);

    }
    public String VerifyLoginLink()
    {
        return getTextFromElement(LoginLink);

    }
    public void clickRegisterLink()
    {
        clickOnElement(register);

    }

}

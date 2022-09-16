package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;

    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement regbtn;

    @CacheLookup
    @FindBy(className = "field-validation-error")
    List<WebElement> fieldvalidationerror;

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement selectgender;

    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement enterfname;

    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement enterlname;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement selectday;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement selectmonth;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement selectyear;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement enteremailr;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordr;

    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmpasswordr;





    public String getErrorMessage() {
        return getTextFromElement(errorMessage);
    }

    public void ClickRegisterButton()
    {
        clickOnElement(regbtn);

    }
    public String getValidationErrorMessageForField(String fieldName) {
        String validationMessage = null;
        for (WebElement message : fieldvalidationerror) {
            if (message.getAttribute("data-valmsg-for").equals(fieldName)) {
                validationMessage = message.getText();
                break;
            }
        }
        return validationMessage;
    }
    public void selectGenderf()
    {
        clickOnElement(selectgender);

    }
    public void EnterFirstName()
    {
        sendTextToElement(enterfname,"divya");

    }
    public void EnterLastName()
    {
        sendTextToElement(enterlname,"patel");
    }
    public void SelectDayBirthday()
    {
        selectByValueFromDropDown(selectday,"6");
    }
    public void SelectMonthBirthday()
    {
        selectByValueFromDropDown(selectmonth,"5");
    }
    public void SelectYearBirthday()
    {
        selectByValueFromDropDown(selectyear,"1996");
    }
    public void EnterEmail()
    {
        sendTextToElement(enteremailr,"diyavb123@gmail.com");
    }
    public void EnterPassword()
    {
        sendTextToElement(passwordr,"Divs123456");
    }
    public void EnterConfirmPassword()
    {
        sendTextToElement(confirmpasswordr,"Divs123456");
    }

}

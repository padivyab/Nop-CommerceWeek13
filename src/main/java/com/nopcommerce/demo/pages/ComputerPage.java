package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

import javax.annotation.CheckForNull;
import javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder;

public class ComputerPage extends Utility {

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[1]/a[1]")
    WebElement clickcomputer;

    @CacheLookup
    @FindBy(xpath = "//div[@class='page-title']/h1[1]")
    WebElement verifycomputer;

    @CacheLookup
    @FindBy(xpath = "//div[@class='item-grid']/div[1]/div[1]")
    WebElement clickDesktop;

    @CheckForNull
    @FindBy(xpath = "//div[@class='page-title']/h1[1]")
    WebElement verifydesktop;

    public void ClickOnComputer()
    {
        clickOnElement(clickcomputer);

    }
    public String VerifyComputerTab()
    {
        return getTextFromElement(verifycomputer);

    }
    public void ClickOnDesktop()
    {
        clickOnElement(clickDesktop);
    }
    public String VerifyDesktopTab()
    {
        return getTextFromElement(verifydesktop);

    }
}

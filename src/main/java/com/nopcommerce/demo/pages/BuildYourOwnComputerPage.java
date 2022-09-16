package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class BuildYourOwnComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement selectprocessor;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement selectram;

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_3']/ul[1]/li[1]/label")
    List<WebElement> Radiohdd;

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_4']/ul[1]/li[1]/label")
    List<WebElement> Radioos;

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_5']/ul[1]/li[1]/label")
    List<WebElement> softwareCheck;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_10']")
    WebElement microsoft;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addtocart;

    @CacheLookup
    @FindBy(xpath = "//p[contains(text(),'The product has been added to your ')]")
    WebElement productaddmsg;



    public void SelectProcessorName(String proName)
    {
        selectByVisibleTextFromDropDown(selectprocessor,proName);
    }

    public void SelectRAM(String selectr)
    {
        selectByVisibleTextFromDropDown(selectram,selectr);

    }
    public void SelectHDDRadio(String hdd)
    {
        for(WebElement hddselect : Radiohdd)
        {
            if(hddselect.getText().equals(hdd))
            {
                clickOnElement(hddselect);
                break;
            }
        }
    }
    public void SelectOSRadio(String os)
    {
        for (WebElement osselect : Radioos)
        {
            if (osselect.getText().equals(os))
            {
                clickOnElement(osselect);
                break;
            }
        }
    }
    public void SelectSoftware(String software)
    {
        clickOnElement(microsoft);

        for (WebElement softselect : softwareCheck)
        {
            if(softselect.getText().equals(software))
            {
                clickOnElement(softselect);
                break;

            }
        }
    }
    public void ClickOnAddToCart()
    {
        clickOnElement(addtocart);
    }
    public String ProductAddSuccessfully()
    {
        return getTextFromElement(productaddmsg);
        //String msg =gettext(productaddmsg);
        //return msg;
    }
}


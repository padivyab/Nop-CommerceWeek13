package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class ComputerSteps {
    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {

        new ComputerPage().ClickOnComputer();

    }

    @Then("^I verify computer text$")
    public void iVerifyComputerText() {

        String actualMsg = new ComputerPage().VerifyComputerTab();
        String expectedMsg = "Computers";
        Assert.assertEquals(actualMsg,expectedMsg);

    }

    @And("^I click on desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().ClickOnDesktop();

    }

    @Then("^I verify desktop text$")
    public void iVerifyDesktopText() {
        String actualMsg1 = new ComputerPage().VerifyDesktopTab();
        String expectedMsg1 = "Desktops";
        Assert.assertEquals(actualMsg1,expectedMsg1);

    }

    @And("^I click on product name \"([^\"]*)\"$")
    public void iClickOnProductName(String product)
    {
        new DesktopPage().selectProduct(product);

    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String proName)
    {
        new BuildYourOwnComputerPage().SelectProcessorName(proName);

    }

    @And("^I select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ram)
    {
        new BuildYourOwnComputerPage().SelectRAM(ram);

    }

    @And("^I select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String shdd)
    {

        new BuildYourOwnComputerPage().SelectHDDRadio(shdd);
    }

    @And("^I select OD \"([^\"]*)\"$")
    public void iSelectOD(String sos)
    {
        new BuildYourOwnComputerPage().SelectOSRadio(sos);
    }

    @And("^I select software \"([^\"]*)\"$")
    public void iSelectSoftware(String softs)
    {
        new BuildYourOwnComputerPage().SelectSoftware(softs);

    }

    @And("^I click on add to cart$")
    public void iClickOnAddToCart() {
        new BuildYourOwnComputerPage().ClickOnAddToCart();

    }

    @Then("^I verify the product has been added to your shopping cart$")
    public void iVerifyTheProductHasBeenAddedToYourShoppingCart() {
        String actualPro = new BuildYourOwnComputerPage().ProductAddSuccessfully();
        String expectedPro = "The product has been added to your ";
        Assert.assertEquals(actualPro,expectedPro);

    }
}

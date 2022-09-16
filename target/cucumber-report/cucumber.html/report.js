$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As user I want to go computer page into nop commerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8184936600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verifyUserShouldNavigateToComputerPageSuccessfully",
  "description": "",
  "id": "computer-test;verifyusershouldnavigatetocomputerpagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify computer text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 270223000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 698518000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyComputerText()"
});
formatter.result({
  "duration": 73803100,
  "status": "passed"
});
formatter.after({
  "duration": 111500,
  "status": "passed"
});
formatter.before({
  "duration": 3718669600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verifyUserShouldNavigateToDesktopsPageSuccessfully",
  "description": "",
  "id": "computer-test;verifyusershouldnavigatetodesktopspagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify desktop text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1381831300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 553089700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyDesktopText()"
});
formatter.result({
  "duration": 63288300,
  "status": "passed"
});
formatter.after({
  "duration": 36200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "verifyThatUserShouldBuildYouOwnComputerAndAddThemToCartSuccessfully",
  "description": "",
  "id": "computer-test;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OD \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify the product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "computer-test;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 31,
      "id": "computer-test;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 32,
      "id": "computer-test;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 33,
      "id": "computer-test;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 34,
      "id": "computer-test;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3383591800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verifyThatUserShouldBuildYouOwnComputerAndAddThemToCartSuccessfully",
  "description": "",
  "id": "computer-test;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OD \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify the product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 969505800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 536029300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnProductName(String)"
});
formatter.result({
  "duration": 1415894700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 212092600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 168048600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 142712800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOD(String)"
});
formatter.result({
  "duration": 123334400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 252678900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 108732600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 277534600,
  "error_message": "java.lang.AssertionError: expected [The product has been added to your ] but found [The product has been added to your shopping cart]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.nopcommerce.demo.steps.ComputerSteps.iVerifyTheProductHasBeenAddedToYourShoppingCart(ComputerSteps.java:94)\r\n\tat ✽.Then I verify the product has been added to your shopping cart(src/test/java/resources/featurefile/computer.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 576744100,
  "status": "passed"
});
formatter.before({
  "duration": 4310604100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verifyThatUserShouldBuildYouOwnComputerAndAddThemToCartSuccessfully",
  "description": "",
  "id": "computer-test;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OD \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify the product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 737703900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 533598200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnProductName(String)"
});
formatter.result({
  "duration": 1275631500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 86472400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 144902300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 57328300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOD(String)"
});
formatter.result({
  "duration": 58998700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 196268600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 102695900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 20055646400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[contains(text(),\u0027The product has been added to your \u0027)]\"}\n  (Session info: chrome\u003d105.0.5195.126)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ELH5PJN7\u0027, ip: \u0027192.168.0.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8f4066d928c3f2f644796cbdb1d15fbb, findElement {using\u003dxpath, value\u003d//p[contains(text(),\u0027The product has been added to your \u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.126, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\DIVYAP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50435}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50435/devtoo..., se:cdpVersion: 105.0.5195.126, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8f4066d928c3f2f644796cbdb1d15fbb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utilities.Utility.getTextFromElement(Utility.java:64)\r\n\tat com.nopcommerce.demo.pages.BuildYourOwnComputerPage.ProductAddSuccessfully(BuildYourOwnComputerPage.java:107)\r\n\tat com.nopcommerce.demo.steps.ComputerSteps.iVerifyTheProductHasBeenAddedToYourShoppingCart(ComputerSteps.java:92)\r\n\tat ✽.Then I verify the product has been added to your shopping cart(src/test/java/resources/featurefile/computer.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 270494500,
  "status": "passed"
});
formatter.before({
  "duration": 3113036800,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verifyThatUserShouldBuildYouOwnComputerAndAddThemToCartSuccessfully",
  "description": "",
  "id": "computer-test;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OD \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify the product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 62400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 640664900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 506378100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnProductName(String)"
});
formatter.result({
  "duration": 1923428700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 75671200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 128235300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 120382000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOD(String)"
});
formatter.result({
  "duration": 101860100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 155954000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 104113400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 252107100,
  "error_message": "java.lang.AssertionError: expected [The product has been added to your ] but found [The product has been added to your shopping cart]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.nopcommerce.demo.steps.ComputerSteps.iVerifyTheProductHasBeenAddedToYourShoppingCart(ComputerSteps.java:94)\r\n\tat ✽.Then I verify the product has been added to your shopping cart(src/test/java/resources/featurefile/computer.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 475254100,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3982356000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to login page Successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to login page successfully and see \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 42600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 670080000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 54
    }
  ],
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfullyAndSee(String)"
});
formatter.result({
  "duration": 51336500,
  "status": "passed"
});
formatter.after({
  "duration": 27600,
  "status": "passed"
});
formatter.before({
  "duration": 3342567900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "login-test;verifytheerrormessagewithinvalidcredentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"asd@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"2345\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 37700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 663770600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 154746500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2345",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 125154000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 457530400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 69223900,
  "status": "passed"
});
formatter.after({
  "duration": 26300,
  "status": "passed"
});
formatter.before({
  "duration": 3989807200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verifyThatUserShouldLogInSuccessFullyWithValidCredentials",
  "description": "",
  "id": "login-test;verifythatusershouldloginsuccessfullywithvalidcredentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"div1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"Diva123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 39700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 760522500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 250820600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Diva123456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 234080200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 891989700,
  "status": "passed"
});
formatter.after({
  "duration": 19500,
  "status": "passed"
});
formatter.before({
  "duration": 4697975000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "VerifyThatUserShouldLogOutSuccessFully",
  "description": "",
  "id": "login-test;verifythatusershouldlogoutsuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"div1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"Diva123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Logout button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify login link display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1110616100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 281147400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Diva123456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 354307900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1038353500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 977454700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyLoginLinkDisplay()"
});
formatter.result({
  "duration": 253369800,
  "status": "passed"
});
formatter.after({
  "duration": 31900,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/registerp.feature");
formatter.feature({
  "line": 1,
  "name": "RegisterPage Test",
  "description": "\r\nAs I want to click register page",
  "id": "registerpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4100012300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verifyUserShouldNavigateToRegisterPageSuccessfully",
  "description": "",
  "id": "registerpage-test;verifyusershouldnavigatetoregisterpagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click a register page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 280700,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iClickARegisterPage()"
});
formatter.result({
  "duration": 1362366300,
  "status": "passed"
});
formatter.after({
  "duration": 36000,
  "status": "passed"
});
formatter.before({
  "duration": 4726156300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verifyThatFirstNameLastNameEmailPasswordAndConfirmPasswordFieldsAreMandatory",
  "description": "",
  "id": "registerpage-test;verifythatfirstnamelastnameemailpasswordandconfirmpasswordfieldsaremandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click a register page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Verify the error message First name is required",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify the error message Last name is required",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify the error message Email is required",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify the error message Password is required",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify the error message Confirm Password is required",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 180200,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iClickARegisterPage()"
});
formatter.result({
  "duration": 1278351500,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 446391700,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iVerifyTheErrorMessageFirstNameIsRequired()"
});
formatter.result({
  "duration": 389067100,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iVerifyTheErrorMessageLastNameIsRequired()"
});
formatter.result({
  "duration": 240459600,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iVerifyTheErrorMessageEmailIsRequired()"
});
formatter.result({
  "duration": 120173300,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iVerifyTheErrorMessagePasswordIsRequired()"
});
formatter.result({
  "duration": 123633300,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iVerifyTheErrorMessageConfirmPasswordIsRequired()"
});
formatter.result({
  "duration": 154454300,
  "status": "passed"
});
formatter.after({
  "duration": 121900,
  "status": "passed"
});
formatter.before({
  "duration": 4813636400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "registerpage-test;verifythatusershouldcreateaccountsuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click a register page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I select gender female",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter firstname",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter lastname",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select day",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select month",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select year",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 133700,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iClickARegisterPage()"
});
formatter.result({
  "duration": 1036039000,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iSelectGenderFemale()"
});
formatter.result({
  "duration": 2152853300,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iEnterFirstname()"
});
formatter.result({
  "duration": 1285976500,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iEnterLastname()"
});
formatter.result({
  "duration": 1287518500,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iSelectDay()"
});
formatter.result({
  "duration": 1328317900,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iSelectMonth()"
});
formatter.result({
  "duration": 1160694900,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iSelectYear()"
});
formatter.result({
  "duration": 1535973900,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iEnterEmail()"
});
formatter.result({
  "duration": 1445086000,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iEnterPassword()"
});
formatter.result({
  "duration": 1744140100,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 1346452000,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1456598200,
  "status": "passed"
});
formatter.after({
  "duration": 24500,
  "status": "passed"
});
});
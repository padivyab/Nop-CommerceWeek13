$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7133457500,
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
  "duration": 278110500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1098675800,
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
  "duration": 113704700,
  "status": "passed"
});
formatter.after({
  "duration": 170500,
  "status": "passed"
});
formatter.before({
  "duration": 3440637500,
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
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 553344300,
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
  "duration": 145529000,
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
  "duration": 115404800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 431471600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 62483100,
  "status": "passed"
});
formatter.after({
  "duration": 43300,
  "status": "passed"
});
formatter.before({
  "duration": 3395612300,
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
  "name": "I enter email \"diva123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"Div123456\"",
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
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 646555900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diva123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 175609800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Div123456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 139965500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 450530700,
  "status": "passed"
});
formatter.after({
  "duration": 39800,
  "status": "passed"
});
formatter.before({
  "duration": 3725739600,
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
  "name": "I enter email \"diva123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"Div123456\"",
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
  "duration": 45300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 675369500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diva123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 268949800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Div123456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 268406800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 650941600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 20042220900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-logout\u0027]\"}\n  (Session info: chrome\u003d105.0.5195.126)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ELH5PJN7\u0027, ip: \u0027192.168.0.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3e55978be5633c5ddd22a62a7c6f045c, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-logout\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.126, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\DIVYAP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63053}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63053/devtoo..., se:cdpVersion: 105.0.5195.126, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3e55978be5633c5ddd22a62a7c6f045c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utilities.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.LoginPage.clickOnLogout(LoginPage.java:68)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iClickOnLogoutButton(LoginSteps.java:63)\r\n\tat ✽.And I click on Logout button(src/test/java/resources/featurefile/login.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iVerifyLoginLinkDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 219340200,
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
  "duration": 3282616000,
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
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iClickARegisterPage()"
});
formatter.result({
  "duration": 541625900,
  "status": "passed"
});
formatter.after({
  "duration": 37700,
  "status": "passed"
});
formatter.before({
  "duration": 3782657800,
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
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iClickARegisterPage()"
});
formatter.result({
  "duration": 650934000,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 159678500,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iVerifyTheErrorMessageFirstNameIsRequired()"
});
formatter.result({
  "duration": 126359600,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iVerifyTheErrorMessageLastNameIsRequired()"
});
formatter.result({
  "duration": 86863800,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iVerifyTheErrorMessageEmailIsRequired()"
});
formatter.result({
  "duration": 110176900,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iVerifyTheErrorMessagePasswordIsRequired()"
});
formatter.result({
  "duration": 118613000,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iVerifyTheErrorMessageConfirmPasswordIsRequired()"
});
formatter.result({
  "duration": 145055400,
  "status": "passed"
});
formatter.after({
  "duration": 27400,
  "status": "passed"
});
formatter.before({
  "duration": 4553386600,
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
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iClickARegisterPage()"
});
formatter.result({
  "duration": 575682600,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iSelectGenderFemale()"
});
formatter.result({
  "duration": 2117229400,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iEnterFirstname()"
});
formatter.result({
  "duration": 1149446400,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iEnterLastname()"
});
formatter.result({
  "duration": 1181237400,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iSelectDay()"
});
formatter.result({
  "duration": 1761715500,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iSelectMonth()"
});
formatter.result({
  "duration": 1898796800,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iSelectYear()"
});
formatter.result({
  "duration": 1182829400,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iEnterEmail()"
});
formatter.result({
  "duration": 1289275700,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iEnterPassword()"
});
formatter.result({
  "duration": 1248146100,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 1231205800,
  "status": "passed"
});
formatter.match({
  "location": "Regs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1804912700,
  "status": "passed"
});
formatter.after({
  "duration": 34700,
  "status": "passed"
});
});
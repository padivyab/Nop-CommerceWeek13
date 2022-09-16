Feature: Computer Test
  As user I want to go computer page into nop commerce website

  Scenario: verifyUserShouldNavigateToComputerPageSuccessfully

    Given  I am on Home Page
    When   I click on computer tab
    Then   I verify computer text

  Scenario: verifyUserShouldNavigateToDesktopsPageSuccessfully

    Given I am on Home Page
    When  I click on computer tab
    And   I click on desktop link
    Then  I verify desktop text

  Scenario Outline: verifyThatUserShouldBuildYouOwnComputerAndAddThemToCartSuccessfully

    Given I am on Home Page
    When  I click on computer tab
    And   I click on desktop link
    And   I click on product name "Build your own computer"
    And   I select processor "<processor>"
    And   I select RAM "<ram>"
    And   I select HDD "<hdd>"
    And   I select OD "<os>"
    And   I select software "<software>"
    And   I click on add to cart
    Then  I verify the product has been added to your shopping cart
    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |






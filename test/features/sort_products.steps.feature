Feature: Sort Products
  Scenario: User sort catalog by name ascending
    Given the user navigates to the catalog page
    When the user clicks on the sort button
    When the user clicks on name ascending sort button
    Then the user should see the catalog sorted by name ascending

  Scenario: User sort catalog by name descending
    Given the user navigates to the catalog page
    When the user clicks on the sort button
    When the user clicks on name descending sort button
    Then the user should see the catalog sorted by name descending

  Scenario: User sort catalog by price ascending
    Given the user navigates to the catalog page
    When the user clicks on the sort button
    When the user clicks on price ascending sort button
    Then the user should see the catalog sorted by price ascending

  Scenario: User sort catalog by price descending
    Given the user navigates to the catalog page
    When the user clicks on the sort button
    When the user clicks on price descending sort button
    Then the user should see the catalog sorted by price descending
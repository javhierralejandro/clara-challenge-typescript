Feature: Remove Product From The Cart
  Scenario: User removes a single product from the cart
    Given the user has at least one product in the cart
    When the user clicks on Remove Item
    Then the product should be removed from cart
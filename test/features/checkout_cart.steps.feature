Feature: Checkout the cart
  Scenario: User completes a purchase
    Given the user has at least one product in cart
    When the user proceeds to checkout
    When the user login to proceed to checkout
    When the user enters a shipping address
    When the user enters a payment method
    When the user places the order
    Then the products checkout should be completed



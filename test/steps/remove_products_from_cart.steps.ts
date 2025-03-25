import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { getDriver } from './driver';
import { GlobalPage } from '../pageobjects/global.page';
import { CartPage } from '../pageobjects/cart.page';

let driver: WebdriverIO.Browser;
let globalPage: GlobalPage;
let cartPage: CartPage;
let initialCartCount: number;

// Step definition for validating that the user has at least one product in the cart
Given('the user has at least one product in the cart', async function () {
    driver = await getDriver();
    globalPage = new GlobalPage(driver);

    // Get the current cart count
    initialCartCount = await globalPage.getCartCount();

    // Validate that the cart count is greater than 0
    expect(initialCartCount).to.be.greaterThan(0, `Expected at least 1 product in the cart, but found ${initialCartCount}`);

    // Open the cart page
    await globalPage.openCart();
    cartPage = new CartPage(driver);
});

// Step definition for removing a product from the cart
When('the user clicks on Remove Item', async function () {
    // Remove the product from the cart
    await cartPage.removeItem();
    globalPage = new GlobalPage(driver);
});

// Step definition for verifying that the product was removed from the cart
Then('the product should be removed from cart', async function () {
    // Wait for UI update
    await driver.pause(1000);

    // Get the final cart count
    const finalCartCount = await globalPage.getCartCount();

    // Validate that the final cart count is equal to the initial cart count minus 1
    expect(finalCartCount).to.equal(initialCartCount - 1, 'Error: the product was not removed correctly.');
});

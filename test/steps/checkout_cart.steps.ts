import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { getDriver } from './driver';
import { GlobalPage } from '../pageobjects/global.page';
import { CartPage } from '../pageobjects/cart.page';
import { LoginPage } from '../pageobjects/login.page';
import { CheckoutAddressPage } from '../pageobjects/checkout_address.page';
import { CheckoutPaymentPage } from '../pageobjects/checkout_payment.page';
import { CheckoutPlaceOrderPage } from '../pageobjects/checkout_place.order';
import { CheckoutCompletePage } from '../pageobjects/checkout_complete.page';
import { MenuPage } from '../pageobjects/menu.page';

let driver: WebdriverIO.Browser;
let globalPage: GlobalPage;
let cartPage: CartPage;
let loginPage: LoginPage;
let checkoutAddressPage: CheckoutAddressPage;
let checkoutPaymentPage: CheckoutPaymentPage;
let checkoutPlaceOrderPage: CheckoutPlaceOrderPage;
let checkoutCompletePage: CheckoutCompletePage;
let menuPage: MenuPage;

// Step definition for validating that the user has at least one product in the cart
Given('the user has at least one product in cart', async function () {
    driver = await getDriver();
    globalPage = new GlobalPage(driver);

    // Get the current cart count
    const actualCartCount = await globalPage.getCartCount();
    
    // Validate that the cart count is greater than 0
    expect(actualCartCount).to.be.greaterThan(0, `Expected at least 1 product in the cart, but found ${actualCartCount}`);

    // Open the cart page
    await globalPage.openCart();
    cartPage = new CartPage(driver);
});

// Step definition for proceeding to checkout
When('the user proceeds to checkout', async function () {
    await cartPage.proceedToCheckout();
    loginPage = new LoginPage(driver);
});

// Step definition for logging in to proceed to checkout
When('the user logs in to proceed to checkout', async function () {
    await loginPage.enterUsername('bob@example.com');
    await loginPage.enterPassword('10203040');
    await loginPage.clickLogin();
    checkoutAddressPage = new CheckoutAddressPage(driver);
});

// Step definition for entering shipping address
When('the user enters a shipping address', async function () {
    await checkoutAddressPage.enterFullName('Rebecca Winter');
    await checkoutAddressPage.enterAddress1('Mandorley 112');
    await checkoutAddressPage.enterAddress2('Entrance 1');
    await checkoutAddressPage.enterCity('Truro');
    await checkoutAddressPage.enterState('Cornwall');
    await checkoutAddressPage.enterZipcode('89750');
    await checkoutAddressPage.enterCountry('United Kingdom');

    await checkoutAddressPage.proceedToPayment();
    checkoutPaymentPage = new CheckoutPaymentPage(driver);
});

// Step definition for entering payment method
When('the user enters a payment method', async function () {
    try {
        await checkoutPaymentPage.enterCardFullName('Rebecca Winter');
    } catch (error) {
        await checkoutPaymentPage.enterCardFullName('Rebecca Winter'); // Retry in case of StaleElementReferenceException
    }

    await checkoutPaymentPage.enterCardNumber('325812657568789');
    await checkoutPaymentPage.enterExpirationDate('03/25');
    await checkoutPaymentPage.enterSecurityCode('123');

    // Verify if billing address checkbox is checked
    const billingAddressChecked = await checkoutPaymentPage.verifyCheckbox();

    if (billingAddressChecked) {
        await checkoutPaymentPage.reviewOrder();
    } else {
        // If not checked, proceed to fill billing information (optional step if needed)
        await checkoutPaymentPage.reviewOrder();
    }

    checkoutPlaceOrderPage = new CheckoutPlaceOrderPage(driver);
});

// Step definition for placing the order
When('the user places the order', async function () {
    await checkoutPlaceOrderPage.placeOrder();
    checkoutCompletePage = new CheckoutCompletePage(driver);
});

// Step definition for verifying that the checkout is completed
Then('the products checkout should be completed', async function () {
    const checkoutCompletionText = await checkoutCompletePage.validateCheckoutCompletion();
    expect(checkoutCompletionText).to.equal('Checkout Complete', 'Checkout completion failed');

    // Continue shopping
    await checkoutCompletePage.continueShopping();

    // Logging out
    globalPage = new GlobalPage(driver);
    await globalPage.openMenu();
    menuPage = new MenuPage(driver);
    await menuPage.clickLogout();

    // Handle logout request alert
    const alert = await driver.getAlertText();
    await driver.acceptAlert();

    // Terminate the app
    await driver.terminateApp('com.saucelabs.mydemoapp.rn');
});

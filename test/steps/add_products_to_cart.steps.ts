import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { getDriver } from './driver';
import { CatalogPage } from '../pageobjects/catalog.page';
import { ProductPage } from '../pageobjects/product.page';
import { GlobalPage } from '../pageobjects/global.page';
import { MenuPage } from '../pageobjects/menu.page';

let driver: WebdriverIO.Browser;
let catalogPage: CatalogPage;
let productPage: ProductPage;
let globalPage: GlobalPage;
let menuPage: MenuPage;

// Step definition for navigating to the catalog page
Given('the user is on the catalog page', async function () {
    driver = await getDriver();
    catalogPage = new CatalogPage();
});

// Step definition for selecting a product in the catalog page by index
When('the user selects product {int} in the catalog page', async function (index: number) {
    await catalogPage.selectProduct(index);
    productPage = new ProductPage();
});

// Step definition for adding product to the cart
When('the user adds product to cart', async function () {
    await productPage.addProductToCart();
    globalPage = new GlobalPage(driver);
    await globalPage.openMenu();
    menuPage = new MenuPage(driver);
    await menuPage.openCatalog();
});

// Step definition for verifying the number of products in the cart
Then('the cart should contain {int} product(s)', async function (num: number) {
    const expectedCartCount = num;
    const actualCartCount = await globalPage.getCartCount();

    expect(actualCartCount).to.equal(expectedCartCount, `Expected ${expectedCartCount} products, but found ${actualCartCount}`);
});

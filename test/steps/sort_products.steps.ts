import { Given, When, Then } from '@cucumber/cucumber';
import { getDriver } from './driver';
import { CatalogPage } from '../pageobjects/catalog.page';

let driver: WebdriverIO.Browser;
let catalogPage: CatalogPage;

// Step definition for navigating to the catalog page
Given('the user navigates to the catalog page', async function () {
    driver = await getDriver();
    catalogPage = new CatalogPage(driver);
});

// Step definition for clicking the sort button
When('the user clicks on the sort button', async function () {
    await catalogPage.clickSortCatalog();
});

// Step definition for sorting by name in ascending order
When('the user clicks on name ascending sort button', async function () {
    await catalogPage.sortByNameAscending();
});

// Step definition for sorting by name in descending order
When('the user clicks on name descending sort button', async function () {
    await catalogPage.sortByNameDescending();
});

// Step definition for sorting by price in ascending order
When('the user clicks on price ascending sort button', async function () {
    await catalogPage.sortByPriceAscending();
});

// Step definition for sorting by price in descending order
When('the user clicks on price descending sort button', async function () {
    await catalogPage.sortByPriceDescending();
});

// Step definition for verifying the catalog is sorted by name in ascending order
Then('the user should see the catalog sorted by name ascending', async function () {
    await catalogPage.verifyNameAscending();
});

// Step definition for verifying the catalog is sorted by name in descending order
Then('the user should see the catalog sorted by name descending', async function () {
    await catalogPage.verifyNameDescending();
});

// Step definition for verifying the catalog is sorted by price in ascending order
Then('the user should see the catalog sorted by price ascending', async function () {
    await catalogPage.verifyPriceAscending();
});

// Step definition for verifying the catalog is sorted by price in descending order
Then('the user should see the catalog sorted by price descending', async function () {
    await catalogPage.verifyPriceDescending();
});

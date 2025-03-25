import GlobalPage from './global.page';

export class CatalogPage extends GlobalPage {
    // Locators for various elements on the catalog page
    private SORT_BUTTON = "//android.view.ViewGroup[@content-desc='sort button']";
    private PRODUCT_ELELEMNT = "(//android.view.ViewGroup[@content-desc='products screen']//android.view.ViewGroup[@content-desc='store item'])[{}]";
    private PRODUCT_PRICE_ELEMENT = "(//android.view.ViewGroup[@content-desc='store item'])[{}]//android.widget.TextView[@content-desc='store item price']";
    private NAME_ASCENDING_SORT_BUTTON = "//android.view.ViewGroup[@content-desc='nameAsc']";
    private NAME_DESCENDING_SORT_BUTTON = "//android.view.ViewGroup[@content-desc='nameDesc']";
    private PRICE_ASCENDING_SORT_BUTTON = "//android.view.ViewGroup[@content-desc='priceAsc']";
    private PRICE_DESCENDING_SORT_BUTTON = "//android.view.ViewGroup[@content-desc='priceDesc']";

    // Method to select a product by its index number
    async selectProduct(productNumber: number): Promise<void>{
        const productXpath = this.PRODUCT_ELELEMNT.replace("{}", productNumber.toString());
        await this.clickElement(productXpath);
    }

    // Method to click the sort button on the catalog page
    async clickSortCatalog(): Promise<void>{
        await this.clickElement(this.SORT_BUTTON);
    }

    // Sorting methods
    async sortByNameAscending(): Promise<void>{
        await this.clickElement(this.NAME_ASCENDING_SORT_BUTTON);
    }

    async sortByNameDescending(): Promise<void>{
        await this.clickElement(this.NAME_DESCENDING_SORT_BUTTON);
    }

    async sortByPriceAscending(): Promise<void>{
        await this.clickElement(this.PRICE_ASCENDING_SORT_BUTTON);
    }

    async sortByPriceDescending(): Promise<void>{
        await this.clickElement(this.PRICE_DESCENDING_SORT_BUTTON);
    }

    // Sorting Verification methods
    async verifyNameAscending(): Promise<void>{
        const productNames: string[] = [];
        for (let i = 1; i <= 6; i++) {
            const productXpath = this.PRODUCT_ELELEMNT.replace("{}", i.toString());
            const productElement = await this.findElement(productXpath);
            const productName = await productElement.getAttribute("content-desc");
            productNames.push(productName);
        }
        if (productNames.join() !== [...productNames].sort().join()) {
            throw new Error("Error: the catalog is not correctly sorted. List: ${productNames}");
        }
    }

    async verifyNameDescending(): Promise<void> {
        const productNames: string[] = [];
        for (let i = 1; i <= 6; i++) {
            const productXPath = this.PRODUCT_ELELEMNT.replace("{}", i.toString());
            const productElement = await this.findElement(productXPath);
            const productName = await productElement.getAttribute("content-desc");
            productNames.push(productName);
        }
        if (productNames.join() !== [...productNames].sort().reverse().join()) {
            throw new Error(`Error: the catalog is not correctly sorted. List: ${productNames}`);
        }
    }

    async verifyPriceAscending(): Promise<void> {
        const productPrices: number[] = [];
        for (let i = 1; i <= 6; i++) {
            const productXPath = this.PRODUCT_PRICE_ELEMENT.replace("{}", i.toString());
            const productElement = await this.findElement(productXPath);
            const productPriceText = await productElement.getText();
            const price = parseFloat(productPriceText.replace("$", "").replace(",", "").trim());
            productPrices.push(price);
        }
        if (productPrices.join() !== [...productPrices].sort((a, b) => a - b).join()) {
            throw new Error(`Error: the catalog is not correctly sorted. List: ${productPrices}`);
        }
    }

    async verifyPriceDescending(): Promise<void> {
        const productPrices: number[] = [];
        for (let i = 1; i <= 6; i++) {
            const productXPath = this.PRODUCT_PRICE_ELEMENT.replace("{}", i.toString());
            const productElement = await this.findElement(productXPath);
            const productPriceText = await productElement.getText();
            const price = parseFloat(productPriceText.replace("$", "").replace(",", "").trim());
            productPrices.push(price);
        }
        if (productPrices.join() !== [...productPrices].sort((a, b) => b - a).join()) {
            throw new Error(`Error: the catalog is not correctly sorted. List: ${productPrices}`);
        }
    }

}
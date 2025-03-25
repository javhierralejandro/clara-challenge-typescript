import GlobalPage from './global.page';

export class CartPage extends GlobalPage {
    // Locators for various elements on the cart page
    private REMOVE_ITEM_BUTTON = "//android.view.ViewGroup[@content-desc='remove item']";
    private COUNTER_MINUS_BUTTON = "//android.view.ViewGroup[@content-desc='counter minus button']";
    private COUNTER_PLUS_BUTTON = "//android.view.ViewGroup[@content-desc='counter plus button']";
    private CHECKOUT_BUTTON = "//android.view.ViewGroup[@content-desc='Proceed To Checkout button']";

    // Method to count the number of products in the cart
    async countProducts(): Promise<number> {
        try {
            // Find all elements mathing the remove item button locator
            const products = await this.findElements(this.REMOVE_ITEM_BUTTON);
            return products.length;
        } catch (error) {
            console.error(`There is a problem retrieving the number of products: ${error}`);
            return 0;
        }
    }

    // Method to remove a product from the cart
    async removeItem(): Promise<void> {
        const productsQuantity = await this.countProducts();
        if (productsQuantity > 0) {
            const productXpath = `(${this.REMOVE_ITEM_BUTTON})[${productsQuantity}]`;
            await this.clickElement(productXpath);
        }else {
            await this.clickElement(this.REMOVE_ITEM_BUTTON);
        }
    }

    // Method to proceed to the checkout page
    async proceedToCheckout(): Promise<void> {
        await this.clickElement(this.CHECKOUT_BUTTON);
    }
}    
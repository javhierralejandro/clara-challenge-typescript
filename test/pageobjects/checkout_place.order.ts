import GlobalPage from './global.page';

export class CheckoutPlaceOrderPage extends GlobalPage {
    // Locator for the place order button
    private PLACE_ORDER_BUTTON: string = "//android.view.ViewGroup[@content-desc='Place Order button']";

    // Method to place an order
    async placeOrder(): Promise<void> {
        // Click the "Place Order" button to finalize the order
        await this.clickElement(this.PLACE_ORDER_BUTTON);
    }
}

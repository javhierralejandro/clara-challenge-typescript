import GlobalPage from './global.page';

export class CheckoutCompletePage extends GlobalPage {
    // Locators for various input fields and buttons on the checkout complete page
    private CONTINUE_SHOPPING_BUTTON = "//android.view.ViewGroup[@content-desc='Continue Shopping button']";
    private CHECKOUT_COMPLETE_TEXT = "//android.widget.TextView[@text='Checkout Complete']";

    // Method to validate that the checkout process is complete
    async validateCheckoutCompletion(): Promise<string> {
        const checkoutCompletionText = await this.findElement(this.CHECKOUT_COMPLETE_TEXT);
        return await checkoutCompletionText.getText();
    }

    // Method to continue shopping after checkout is complete
    async continueShopping(): Promise<void> {
        await this.clickElement(this.CONTINUE_SHOPPING_BUTTON);
    }
}
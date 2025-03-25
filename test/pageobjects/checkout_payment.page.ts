import GlobalPage from './global.page';

export class CheckoutPaymentPage extends GlobalPage {
    // Locators for various input fields and buttons on the checkout payment page
    private CARD_FULL_NAME_TEXT_FIELD = "//android.widget.EditText[@content-desc='Full Name* input field']";
    private CARD_NUMBER_TEXT_FIELD = "//android.widget.EditText[@content-desc='Card Number* input field']";
    private EXPIRATION_DATE_TEXT_FIELD = "//android.widget.EditText[@content-desc='Expiration Date* input field']";
    private SECURITY_CODE_TEXT_FIELD = "//android.widget.EditText[@content-desc='Security Code* input field']";
    private BILLING_CHECK_BOX = "//android.view.ViewGroup[@content-desc='checkbox for My billing address is the same as my shipping address.']";
    private REVIEW_ORDER_BUTTON = "//android.view.ViewGroup[@content-desc='Review Order button']";

    // Method to enter the full name on the card in the corresponding text field
    async enterCardFullName(fullName: string): Promise<void> {
        await this.enterText(this.CARD_FULL_NAME_TEXT_FIELD, fullName);
    }

    // Method to enter the card number in the corresponding text field
    async enterCardNumber(cardNumber: string): Promise<void> {
        await this.enterText(this.CARD_NUMBER_TEXT_FIELD, cardNumber);
    }

    // Method to enter the expiration date in the corresponding text field
    async enterExpirationDate(expirationDate: string): Promise<void> {
        await this.enterText(this.EXPIRATION_DATE_TEXT_FIELD, expirationDate);
    }

    // Method to enter the security code in the corresponding text field
    async enterSecurityCode(securityCode: string): Promise<void> {
        await this.enterText(this.SECURITY_CODE_TEXT_FIELD, securityCode);
    }

    // Method to verify if the billing address checkbox is selected
    async verifyCheckbox(): Promise<boolean> {
        const billingCheckbox = await this.findElement(this.BILLING_CHECK_BOX);
        return await billingCheckbox.isSelected();
    }

    // Method to click the review order button
    async reviewOrder(): Promise<void> {
        await this.clickElement(this.REVIEW_ORDER_BUTTON);
    }
}

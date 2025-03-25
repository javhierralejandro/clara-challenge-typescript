import GlobalPage from './global.page';

export class CheckoutAddressPage extends GlobalPage {
    // Locators for various input fields and buttons on the checkout address page
    private FULL_NAME_TEXT_FIELD = "//android.widget.EditText[@content-desc='Full Name* input field']";
    private ADDRESS_1_TEXT_FIELD = "//android.widget.EditText[@content-desc='Address Line 1* input field']";
    private ADDRESS_2_TEXT_FIELD = "//android.widget.EditText[@content-desc='Address Line 2 input field']";
    private CITY_TEXT_FIELD = "//android.widget.EditText[@content-desc='City* input field']";
    private STATE_TEXT_FIELD = "//android.widget.EditText[@content-desc='State/Region input field']";
    private ZIPCODE_TEXT_FIELD = "//android.widget.EditText[@content-desc='Zip Code* input field']";
    private COUNTRY_TEXT_FIELD = "//android.widget.EditText[@content-desc='Country* input field']";
    private TO_PAYMENT_BUTTON = "//android.view.ViewGroup[@content-desc='To Payment button']";

    // Method to enter the full name in the corresponding text field
    async enterFullName(fullName: string): Promise<void> {
        await this.enterText(this.FULL_NAME_TEXT_FIELD, fullName);
    }

    // Method to enter the address line 1 in the corresponding text field
    async enterAddress1(address1: string): Promise<void> {
        await this.enterText(this.ADDRESS_1_TEXT_FIELD, address1);
    }

    // Method to enter the address line 2 in the corresponding text field
    async enterAddress2(address2: string): Promise<void> {
        await this.enterText(this.ADDRESS_2_TEXT_FIELD, address2);
    }

    // Method to enter the city in the corresponding text field
    async enterCity(city: string): Promise<void> {
        await this.enterText(this.CITY_TEXT_FIELD, city);
    }

    // Method to enter the state in the corresponding text field
    async enterState(state: string): Promise<void> {
        await this.enterText(this.STATE_TEXT_FIELD, state);
    }

    // Method to enter the zip code in the corresponding text field
    async enterZipcode(zipcode: string): Promise<void> {
        await this.enterText(this.ZIPCODE_TEXT_FIELD, zipcode);
    }

    // Method to enter the country in the corresponding text field
    async enterCountry(country: string): Promise<void> {
        await this.enterText(this.COUNTRY_TEXT_FIELD, country);
    }

    // Method to proceed to the payment page
    async proceedToPayment(): Promise<void> {
        await this.clickElement(this.TO_PAYMENT_BUTTON);
    }

    
}
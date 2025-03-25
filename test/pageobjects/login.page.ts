import GlobalPage from './global.page';

class LoginPage extends GlobalPage {
    // Locators for the elements on the login page
    private USERNAME_TEXT_FIELD = "//android.widget.EditText[@content-desc='Username input field']";
    private PASSWORD_TEXT_FIELD = "//android.widget.EditText[@content-desc='Password input field']";
    private LOGIN_BUTTON = "//android.view.ViewGroup[@content-desc='Login button']";

    // Method to enter the username in the corresponding text field
    async enterUsername(username: string): Promise<void> {
        await this.enterText(this.USERNAME_TEXT_FIELD, username);
    }

    // Method to enter the password in the corresponding text field
    async enterPassword(password: string): Promise<void> {
        await this.enterText(this.PASSWORD_TEXT_FIELD, password);
    }

    // Method to click the login button
    async clickLogin(): Promise<void> {
        await this.clickElement(this.LOGIN_BUTTON);
    }
}

import GlobalPage from './global.page';

export class MenuPage extends GlobalPage {
    private CATALOG_BUTTON = "//android.view.ViewGroup[@content-desc='menu item catalog']";
    private WEBVIEW_BUTTON = "//android.view.ViewGroup[@content-desc='menu item webview']code scanner";
    private GEO_LOCATION_BUTTON = "//android.view.ViewGroup[@content-desc='menu item qr code scanner']";
    private DRAWING_BUTTON = "//android.view.ViewGroup[@content-desc='menu item geo location']";
    private REPORT_BUG_BUTTON = "//android.view.ViewGroup[@content-desc='menu item drawing']";
    private ABOUT_BUTTON = "//android.view.ViewGroup[@content-desc='menu item about']";
    private RESET_APP_BUTTON = "//android.view.ViewGroup[@content-desc='menu item reset ap']";
    private BIOMETRICS_BUTTON = "//android.view.ViewGroup[@content-desc='menu item biometrics']";
    private LOG_IN_BUTTON = "//android.view.ViewGroup[@content-desc='menu item log in']";
    private LOG_OUT_BUTTON = "//android.view.ViewGroup[@content-desc='menu item log out']";
    private API_CALLS_BUTTON = "//android.view.ViewGroup[@content-desc='menu item log out']";
    private SAUCE_BOT_VIDEO_BUTTON = "//android.view.ViewGroup[@content-desc='menu item log out']";

    // Method to click the login button
    async clickLogin(): Promise<void> {
        await this.clickElement(this.LOG_IN_BUTTON);
    }

    // Method to click the logout button
    async clickLogout(): Promise<void> {
        await this.clickElement(this.LOG_OUT_BUTTON)
    }

    // Method to open the catalog page
    async openCatalog(): Promise<void> {
        await this.clickElement(this.CATALOG_BUTTON);
    }
}
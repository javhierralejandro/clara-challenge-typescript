export class Helpers {
    static async waitForElement(element: WebdriverIO.Element, timeout: number = 5000) {
        await element.waitForDisplayed({ timeout })
    }

    static async clickElement(element: WebdriverIO.Element) {
        await this.waitForElement(element)
        await element.click()
    }

    static async enterText(element: WebdriverIO.Element, text: string) {
        await this.waitForElement(element)
        await element.setValue(text)
    }
}

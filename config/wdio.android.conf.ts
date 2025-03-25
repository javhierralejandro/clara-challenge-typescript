import { config as baseConfig } from './wdio.shared.conf'

export const config = {
    ...baseConfig,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'moto g(60)',
        'appium:appPackage': 'com.saucelabs.mydemoapp.rn',
        'appium:appActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': '/Users/javhierralejandro/Downloads/Android-MyDemoAppRN.1.3.0.build-244.apk',
        'appium:noReset': true,
        'appium:newCommandTimeout': 240
    }],
}
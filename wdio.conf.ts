export const config = {
    runner: 'local',
    specs: ['test/features/**/*.feature'],
    exclude: [],
    maxInstances: 1,
    capabilities: [],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec', ['allure', { outputDir: './reports/allure-results' }]],
    cucumberOpts: {
        require: ['./test/steps/**/*.ts'],
        backtrace: false,
        requireModule: ['ts-node/register'],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: true,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    services: [['appium', { command: 'appium' }]],
    beforeSession: async function () {
        require('ts-node').register()
    }
}
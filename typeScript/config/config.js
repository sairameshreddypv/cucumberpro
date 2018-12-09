"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    // baseUrl: "https://www.ss.com/en",
    baseUrl: "https://www.google.com",
    capabilities: {
        /*   'browserName': 'internet explorer',
           'platform': 'ANY',
           'version': '11',
           'ignoreProtectedModeSettings': true
       */
        'browserName': 'chrome'
    },
    // seleniumArgs: ['-Dwebdriver.ie.driver="node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.141.0.exe"'],
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../../features/*.feature",
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario ",
        strict: true,
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    },
};

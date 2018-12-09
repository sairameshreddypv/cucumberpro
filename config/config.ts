import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

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
         'browserName' : 'chrome'
     },
   // seleniumArgs: ['-Dwebdriver.ie.driver="node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.141.0.exe"'],
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario ",
        strict: true,
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};

import {AfterAll} from "cucumber";

const { BeforeAll, After, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";
var {setDefaultTimeout} = require('cucumber');

BeforeAll({timeout: 10 * 1000}, async () => {
    setDefaultTimeout(60 * 1000);
    browser.ignoreSynchronization = true;
    browser.sleep(20000);
    await browser.get(config.baseUrl);

});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        console.log(scenario.result.status);
        console.log(Status.FAILED);
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});

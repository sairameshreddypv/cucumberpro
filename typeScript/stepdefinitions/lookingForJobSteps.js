"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LookingForJobPage_1 = require("../pages/LookingForJobPage");
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const jobSearch = new LookingForJobPage_1.LookingForJobPageObject();
Given(/^I am on the home page of application$/, () => __awaiter(this, void 0, void 0, function* () {
    yield expect(protractor_1.browser.getCurrentUrl()).to.eventually.equal("https://www.ss.com/en");
}));
Then(/^I verify title of the page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield expect(protractor_1.browser.getTitle()).to.eventually.equal("SS.COM - Announcements");
}));
When(/^I click on "(.*?)" under Job and business category$/, (option) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css("[title*='" + option + "']")).click();
}));
Then(/^I am on the Job Seach page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield expect(protractor_1.browser.getCurrentUrl()).to.eventually.equal("https://www.ss.com/en/work/i-search-for-work/");
}));
When(/^I click on "(.*?)" option$/, (field) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css("[title*='" + field + "']")).click();
}));
Then(/^I choose "(.*?)" from announcements and add to favorites$/, (job) => __awaiter(this, void 0, void 0, function* () {
    var allNames = protractor_1.element.all(protractor_1.by.css("td a.am"));
    yield allNames.filter(function (user) {
        return user.getText().then(function (text) {
            return text.includes(job);
        });
    }).first().click();
    yield protractor_1.browser.sleep(2000);
    yield jobSearch.addToFavoritesButton.click();
    yield jobSearch.alertOk.click();
}));
Then(/^I verify "(.*?)" annoucement is added to Memo section$/, (job) => __awaiter(this, void 0, void 0, function* () {
    yield jobSearch.memoSection.click();
    yield protractor_1.element.all(protractor_1.by.css("td a.am")).filter(function (user) {
        return user.getText().then(function (text) {
            return text.includes(job);
        });
    });
}));

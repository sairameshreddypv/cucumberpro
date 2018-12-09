import { browser, element, by } from "protractor";
import { LookingForJobPageObject } from "../pages/LookingForJobPage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const jobSearch: LookingForJobPageObject = new LookingForJobPageObject();

Given(/^I am on the home page of application$/, async () => {
  await expect(browser.getCurrentUrl()).to.eventually.equal("https://www.ss.com/en");
});

Then (/^I verify title of the page$/, async () => { 
  await expect(browser.getTitle()).to.eventually.equal("SS.COM - Announcements");
});

When (/^I click on "(.*?)" under Job and business category$/, async (option) => {
  await element(by.css("[title*='"+option+"']")).click();
});

Then (/^I am on the Job Seach page$/, async () => {
  await expect(browser.getCurrentUrl()).to.eventually.equal("https://www.ss.com/en/work/i-search-for-work/");
});

When (/^I click on "(.*?)" option$/, async (field) => {
  await element(by.css("[title*='"+field+"']")).click();
});

Then (/^I choose "(.*?)" from announcements and add to favorites$/, async (job) =>  {
  var allNames = element.all(by.css("td a.am"));
  await allNames.filter(function(user) {
    return user.getText().then(function(text) {
      return text.includes(job);
    });
  }).first().click();
  await browser.sleep(2000);
  await jobSearch.addToFavoritesButton.click();
  await jobSearch.alertOk.click(); 
});

Then (/^I verify "(.*?)" annoucement is added to Memo section$/, async (job) => {
  await jobSearch.memoSection.click();
  await element.all(by.css("td a.am")).filter(function(user) {
    return user.getText().then(function(text) {
      return text.includes(job);
    });
  });
});

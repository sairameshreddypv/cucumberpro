"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const chai_imports_1 = require("../config/helpers/chai-imports");
// pages
const login_po_1 = require("./login.po");
const welcome_po_1 = require("./welcome.po");
const page = new login_po_1.LoginPage();
const welcome = new welcome_po_1.WelcomePage();
const { defineSupportCode } = require('cucumber');
defineSupportCode(({ Given, When, Then }) => {
    Given(/^the user is in the Login page$/, (done) => {
        protractor_1.browser.wait(page.getElementRequired().isPresent(), 5000).then(() => {
            done();
        });
    });
    Given(/^the user set the username '([^']*)'$/, (userId) => {
        return page.setUsername(userId);
    });
    Given(/^the user set the password '([^']*)'$/, (password) => {
        return page.setPassword(password);
    });
    When(/^the user logs in the application$/, () => {
        return page.submit();
    });
    Then(/^the user is redirected to the Welcome page$/, (done) => {
        protractor_1.browser.wait(welcome.getElementRequired().isPresent(), 5000).then(() => {
            chai_imports_1.expect(welcome.title.getText()).to.be.eventually.equal('Welcome Guest!');
            done();
        });
    });
    Then(/^a cookie with name '([^']*)' is created with the value '([^']*)'$/, (cookieId, cookieValue, done) => {
        protractor_1.browser.wait(welcome.getElementRequired().isPresent(), 5000).then(() => {
            protractor_1.browser.manage().getCookie(cookieId).then(cookie => {
                chai_imports_1.expect(cookie.name).to.equals(cookieId);
                chai_imports_1.expect(cookie.value).to.equals(cookieValue);
                done();
            });
        });
    });
});

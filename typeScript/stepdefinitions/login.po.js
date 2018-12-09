"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const common_po_1 = require("./common.po");
class LoginPage extends common_po_1.CommonPage {
    constructor() {
        super(...arguments);
        this.title = protractor_1.element(protractor_1.by.className('title'));
        this.username = protractor_1.element(protractor_1.by.id('username'));
        this.password = protractor_1.element(protractor_1.by.id('password'));
        this.loginButton = protractor_1.element(protractor_1.by.id('btnLogin'));
        this.pathUrl = '/login';
    }
    getElementRequired() {
        return protractor_1.element(protractor_1.by.id('loginContent'));
    }
    /**
     * Log in into the application
     * @param {string} username the username
     * @param {string} password the password
     * @param done the callback function
     * @returns {Promise<any[]>}
     */
    login(username = 'guest', password = 'guest123', done) {
        const usernameValue = this.setUsername(username);
        const passwordValue = this.setPassword(password);
        const promises = [usernameValue, passwordValue];
        return Promise.all(promises).then(result => {
            return this.submit().then(() => {
                done();
            });
        });
    }
    /**
     * Set the username in the field
     * @param {string} value the value
     * @returns {any} the promise
     */
    setUsername(value) {
        return this.setValue(this.username, value);
    }
    /**
     * Set the password in the field
     * @param {string} value the value
     * @returns {any} the promise
     */
    setPassword(value) {
        return this.setValue(this.password, value);
    }
    /**
     * Login action when submit
     * @returns {any} the promise
     */
    submit() {
        return this.loginButton.click();
    }
    /**
     * Go to the login page
     * @returns {wdpromise.Promise<any>} the promise
     */
    navigateTo() {
        return protractor_1.browser.get(this.pathUrl);
    }
}
exports.LoginPage = LoginPage;

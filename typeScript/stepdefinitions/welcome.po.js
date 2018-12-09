"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const common_po_1 = require("./common.po");
class WelcomePage extends common_po_1.CommonPage {
    constructor() {
        super(...arguments);
        this.title = protractor_1.element(protractor_1.by.className('title'));
    }
    getElementRequired() {
        return protractor_1.element(protractor_1.by.id('welcomeContent'));
    }
}
exports.WelcomePage = WelcomePage;

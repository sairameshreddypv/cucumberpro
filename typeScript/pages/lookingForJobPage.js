"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LookingForJobPageObject {
    constructor() {
        this.addToFavoritesButton = protractor_1.$("[title='Add to favorites']");
        this.alertOk = protractor_1.$("#alert_ok");
        this.memoSection = protractor_1.$("[title='Memo']");
    }
}
exports.LookingForJobPageObject = LookingForJobPageObject;

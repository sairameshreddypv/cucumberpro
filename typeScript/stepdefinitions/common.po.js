"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommonPage {
    /**
     * Set a value into the input element
     * @param element the element
     * @param value the value
     * @returns {ActionSequence | promise.Promise<void>}
     */
    setValue(element, value) {
        // return browser.actions().mouseMove(element).click().sendKeys(value).perform();
        return element.sendKeys(value);
    }
}
exports.CommonPage = CommonPage;

const logger = require("../../config/logger.config");

class Element {
  constructor(selectorType, selector) {
    if (selectorType === "css") {
      this.element = element(by.css(selector));
    } else {
      this.element = element(by.xpath(selector));
    }
    return this.element;
  }
  click() {
    logger.info(`Clicking "${this.element}"`);
    return this.element.click();
  }
  async getText() {
    const elementText = await this.element.getText();
    logger.info(`Text of element "${this.element}" is [${elementText}]`);
    return elementText;
  }

  async sendKeys(text) {
    const elementKeys = await this.element.sendKeys(text);
    return elementKeys;
  }
}

module.exports = Element;

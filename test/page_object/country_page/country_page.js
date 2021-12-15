const logger = require("../../config/logger.config");
const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_elements");

class CountryPage extends BasePage {
  constructor() {
    super();
    this.url = "https://www.apc.com";
    this.USCountry = new Element(
      "xpath",
      '//a[contains(text(), "United States")]'
    );
  }
  open() {
    logger.info(`Opening "${this.url}" url`);
    return super.open(this.url);
  }
  clickUSCountry() {
    logger.info(`Clicking "United States"`);
    return this.USCountry.click();
  }
}

module.exports = new CountryPage();

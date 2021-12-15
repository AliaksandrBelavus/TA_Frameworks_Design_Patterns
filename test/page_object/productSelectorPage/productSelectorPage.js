const logger = require("../../config/logger.config");
const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_elements");

class ProductSelectorPage extends BasePage {
  constructor() {
    super();
    this.url = "https://www.apc.com/shop/us/en/tools/ups_selector/";
    this.UPSSelector = new Element(
      "xpath",
      "//a[@href='https://www.apc.com/shop/us/en/tools/ups_selector/']"
    );
    this.ConfigureByLoadButton = new Element(
      "xpath",
      "//div[@id='app']//button[1]"
    );
    this.HomeEnvironmentRadio = new Element(
      "css",
      "div[class='SeRadio_seRadioCustomButton__3TTTv']"
    );
    this.TotalPowerInput = new Element(
      "xpath",
      "//div[@class='SeRangeInput_input__FG9Pb TotalLoad_rangeInput__15hX-']/input[1]"
    );
    this.TotalPowerLabel = new Element(
      "xpath",
      "//span[@class='TotalPowerDraw_values__lPanF']"
    );
    this.SelectorTotalPower = new Element(
      "xpath",
      "//div[@class='col-md-6']//div[@role='slider']"
    );
  }
  open() {
    logger.info(`Opening "${this.url}" url`);
    return super.open(this.url);
  }
  clickUPSSelector() {
    logger.info(`Clicking "UPSSelector"`);
    return this.UPSSelector.click();
  }
  clickConfigureByLoadButton() {
    logger.info(`Clicking "Configure by Load Button"`);
    return this.ConfigureByLoadButton.click();
  }
  clickHomeEnvironmentRadio() {
    logger.info(`Select "Home Environment Radiobutton"`);
    return this.HomeEnvironmentRadio.click();
  }
  sendKeysTotalPower(text) {
    logger.info(`Sent to "${this.TotalPowerInput}" text [${text}]`);
    return this.TotalPowerInput.sendKeys(text);
  }
}

module.exports = new ProductSelectorPage();

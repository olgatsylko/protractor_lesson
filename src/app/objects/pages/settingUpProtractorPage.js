const BasePage = require('./basePage');

class SettingUpProtractorPage extends BasePage {
    constructor() {
        super();
        this.logoSet = element(by.css('#setting-up-protractor'));
    }
}

module.exports = SettingUpProtractorPage;
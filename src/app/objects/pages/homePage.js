const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor() {
        super();
        this.mainLogo = element(by.css('.protractor-logo')); 
        this.columnTitles = element.all(by.css('.col-sm-4>h3'));
    }
}

module.exports = HomePage;
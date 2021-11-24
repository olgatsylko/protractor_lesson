const BasePage = require('./basePage');
const MainHeader = require('../controls/mainHeader');
//const mainHeader = new MainHeader();

class HomePage extends BasePage {
    constructor() {
        super();
        this.mainLogo = element(by.css('.protractor-logo')); 
        this.columnTitles = element.all(by.css('.col-sm-4>h3'));//this.columnTitles = $$('.col-sm-4>h3');
    }

    get header() {
        return new MainHeader();
    }
}

module.exports = HomePage;
const BasePage = require('./basePage');
const SideBar = require ('../controls/sideBar');
const sb = new SideBar();

class ProtractorApiPage extends BasePage {
    constructor() {
        super();
        this.logoApi = element(by.css('#title'));
    }

    get bar() {
        return sb.getBar();
    }
}

module.exports = ProtractorApiPage;
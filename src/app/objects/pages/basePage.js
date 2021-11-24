const BaseObject = require('../baseObject');
const MainHeader = require('../controls/mainHeader');
const mainHeader = new MainHeader();
const DropDown = require('../controls/dropDown');
const dropD = new DropDown();

class BasePage extends BaseObject {
    constructor(){
        super();
        this.baseUrl = 'https://www.protractortest.org/';
    }

    async browse(url = '') {
        await browser.get(`${this.baseUrl}${url}`);
    }

    get header() {
        return mainHeader.getHeader();
    }

    get dropDown() {
        return dropD.getDD();
    }


}

module.exports = BasePage;
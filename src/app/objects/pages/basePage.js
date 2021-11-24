const BaseObject = require('../baseObject');
const MainHeader = require('../controls/mainHeader');
//const mainHeader = new MainHeader();

class BasePage extends BaseObject {
    constructor(){
        super();
        this.baseUrl = 'https://www.protractortest.org/';
    }

    async browse(url = '') {
        await browser.get(`${this.baseUrl}${url}`);
    }

    // get header() {
    //     return mainHeader.getHeader();
    // }
}

module.exports = BasePage;
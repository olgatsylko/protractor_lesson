const BaseObject = require('../baseObject');

class SideBar extends BaseObject {
    constructor(){
        super();
        this.search = element(by.css('.form-group'));
        this.searchItems = this.search.all(by.css('.list-unstyled>li>a'));
        this.barItems = '.list-unstyled>li>a';
        this.pauseVal = element(by.cssContainingText('.col-sm-9', 'browser.pause'))
    }

    async selectOption(text){
        await element(by.cssContainingText(this.barItems, text)).click();
    }
    getBar() {
        if (!this.search) {
            return new SideBar ();
        }
        return this;
    }
}

module.exports = SideBar;
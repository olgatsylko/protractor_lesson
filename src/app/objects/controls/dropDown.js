const BaseObject = require('../baseObject');

class DropDown extends BaseObject {

    constructor() {
        super();
        this._dropdown = element(by.css('.dropdown-menu'));
        this.ddItems = this._dropdown.all(by.css('.dropdown-menu>li>a'));
        this.items = '.dropdown-menu>li>a';

        this.tutorial = element(by.css('.open [href="#/tutorial"]'));
        this.settingUpProtractor = element(by.css('.open [href="#/protractor-setup"]'));
    }

    async selectFromDropDown(text){
        await element(by.cssContainingText(this.items, text)).click();
    }

    getDD() {
        if (!this._dropdown) {
            return new DropDown();
        }
        return this;
    }
}

module.exports = DropDown;
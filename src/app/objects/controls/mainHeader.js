const BaseObject = require('../baseObject');

class MainHeader extends BaseObject {
    #quickStart = '#drop1';

    constructor(){
        super();
        this._header = element(by.css('.navbar-collapse'));
        this.mainItems = this._header.all(by.css('.navbar-nav>li>a'));//element(by.css('.navbar-nav')).all(by.css('li>a'));
    }
    
    getHeader () {
        if (!this._header) {
            return new MainHeader();
        }
        return this;
    }

    async clickQuickStart() {
        await element(by.css(this.#quickStart)).click();
    }
}

module.exports = MainHeader;
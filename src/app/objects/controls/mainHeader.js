const BaseObject = require('../baseObject');

class MainHeader extends BaseObject {
    // quickStart = '#drop1';
    // protractorSetup = '#drop2';
  
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

    async clickMenuItem (index) {
        let items = await $('.navbar-nav').all(by.css('.navbar-nav>li>a'));
        items[index].click();     
    }

    // async clickQuickStart() {
    //     await element(by.css(this.quickStart)).click();
    // }

    // async clickProtractorSetup() {
    //     await element(by.css(this.protractorSetup)).click();
    // }

}

module.exports = MainHeader;
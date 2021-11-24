const BaseObject = require("../baseObject");

class MainHeader extends BaseObject{
  
    constructor(){
        super();
        this._header = element(by.css('.navbar-collapse'));
       // this.container = element(by.css('.navbar-collapse'));
        this.mainItems = this._header.all(by.css('.navbar-nav>li'));
    }

    // getHeader () {
    //     if (!this._header) {
    //         this._header = new MainHeader();
    //     }
    //     return this._header;
    // }


    async clickMenuItem (index) {
        let items = await $('.navbar-nav').all(by.css('.navbar-nav>li>a'));
        items[index].click();     
    }

    // async clickMenuItem (index) { 
    //     await this.mainItems[index].click();     
    // }

    async selectFromDropDown (index) {
        let itemsD = await $('.navbar-nav .dropdown').all(by.css('.dropdown-menu a'));
        itemsD[index].click();
    }
}

module.exports = MainHeader;
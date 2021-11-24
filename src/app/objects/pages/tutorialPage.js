const BasePage = require('./basePage');

class TutorialPage extends BasePage {
    constructor() {
        super();
        this.logo = element(by.css('#tutorial'));
    }
}

module.exports = TutorialPage;
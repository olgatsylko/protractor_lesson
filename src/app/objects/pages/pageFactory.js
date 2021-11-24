const TutorialPage = require('./tutorialPage');
const HomePage = require ('./homePage');
const SettingUpProtractorPage = require ('./settingUpProtractorPage');

class PageFactory {
    getPage(page) {
        if (page === 'Home') {
            return new HomePage();
        } if (page === 'Tutorial') {
            return new TutorialPage ();
        } if (page === 'Set Up') {
            return new SettingUpProtractorPage();
        } else {
            console.log('wrong type of a page');
        }
    }
}

module.exports = PageFactory;
const PageFactory = require ('../app/objects/pages/pageFactory');
require ('jasmine');

describe('Protractor Tutorial page', function() {
    let pf = null;

    beforeAll(async function () {
        browser.manage().window().maximize();
        pf = new PageFactory();
    });

    it('Select Tutorial page from Header drop down', async function() {
        let pf = new PageFactory();
        let homeP = pf.getPage('Home');
        let tutorialP = pf.getPage('Tutorial');
        
        await homeP.browse();
        expect (await homeP.isDisplayed('mainLogo')).toEqual(true);

        await homeP.header.clickBy('mainItems', 'Quick Start')
        await homeP.dropDown.selectFromDropDown('Tutorial')
        expect(await tutorialP.isDisplayed('logo')).toEqual(true); 
    });
  });
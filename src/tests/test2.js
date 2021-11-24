const PageFactory = require ('../app/objects/pages/pageFactory');
require ('jasmine');

describe('Protractor Tutorial page', function() {

    beforeEach (async function () {
        browser.manage().window().maximize();
        pf = new PageFactory();
    });

    it('Click Tutorial page', async function() {
        let pf = new PageFactory();
        let homeP = pf.getPage('Home');
        let tp = pf.getPage('Tutorial');
        await homeP.browse();
        expect (await homeP.isDisplayed('mainLogo')).toEqual(true);

        await homeP.header.clickMenuItem(1);
        //await hp.dropdownMenu.selectFromDropDown(0);

        await homeP.header.selectFromDropDown(0);
        expect(await tp.isDisplayed('logo')).toEqual(true);


      
    });
  });
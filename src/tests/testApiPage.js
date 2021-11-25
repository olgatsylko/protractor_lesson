const PageFactory = require ('../app/objects/pages/pageFactory');
require ('jasmine');

describe('Protractor API page', function() {
    let pf = null;

    beforeAll(async function () {
        browser.manage().window().maximize();
        pf = new PageFactory();
    });

    it('Click Protractor API page', async function() {
        let pf = new PageFactory();
        let home = pf.getPage('Home');
        let apiPage = pf.getPage('API');
        await home.browse();
        expect (await home.isDisplayed('mainLogo')).toEqual(true);

        await home.header.clickBy('mainItems', 'Reference')
        await home.dropDown.selectFromDropDown('Protractor API');
        expect(await apiPage.isDisplayed('logoApi')).toEqual(true); 

        await apiPage.bar.selectOption('pause');
        expect (await apiPage.bar.isDisplayed('pauseVal')).toEqual(true);
    });
 });
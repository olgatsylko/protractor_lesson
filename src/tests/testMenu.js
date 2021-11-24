// const { browser } = require('protractor');
// const PageFactory = require ('../app/objects/pages/pageFactory');
// require ('jasmine');

// describe('Protractor Menu items', function() {
//     let pf = null;

//     beforeAll(async function () {
//         pf = new PageFactory();
//     });

//     beforeEach (async function () {
//         pf = new PageFactory();
//         browser.manage().window().maximize();
//     });

//     // afterEach  (async function () {
//     //     browser.quit();
//     // });

//     it('Click Menu items from Home page', async function() {
//         let homePg = pf.getPage('Home');
//         await homePg.browse();
//         expect (await homePg.isDisplayed('mainLogo')).toEqual(true);

//         await homePg.header.clickBy('mainItems', 'Quick Start');
//         expect (await homePg.dropDown.isDisplayed('tutorial')).toEqual(true);

//         await homePg.header.clickBy('mainItems', 'Protractor Setup');
//         expect (await homePg.dropDown.isDisplayed('settingUpProtractor')).toEqual(true);

//     });

//     it('Click Menu items from Tutorial page', async function() {
//         let homePG = pf.getPage('Home');
//         let tutorialPg = pf.getPage('Tutorial');
//         await homePG.browse();
//         expect (await homePG.isDisplayed('mainLogo')).toEqual(true);

//         //navigate to Tutorial page

//         await homePG.header.clickBy('mainItems', 'Quick Start');
//         await homePG.dropDown.selectFromDropDown('Tutorial')
//         expect(await tutorialPg.isDisplayed('logo')).toEqual(true); 

//         await tutorialPg.header.clickBy('mainItems', 'Quick Start');
//         expect (await tutorialPg.dropDown.isDisplayed('tutorial')).toEqual(true);
//         await tutorialPg.header.clickBy('mainItems', 'Protractor Setup');
//         expect (await tutorialPg.dropDown.isDisplayed('settingUpProtractor')).toEqual(true);

//     });

//  });
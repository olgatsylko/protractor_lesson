// const HomePage = require ('../app/objects/pages/homePage');

// describe('Protractor Demo App', function() {
//     //browser.manage().window().maximize();
//     it('Home page', async function() {
//         let hp = new HomePage();
//         await hp.browse();
//         expect (await hp.isDisplayed('mainLogo')).toEqual(true);

//         let titles = ['Test Like a User', 'For Angular Apps', 'Automatic Waiting'];
//         expect(await hp.getTextForEach('columnTitles')).toEqual(titles);

//         let headerItems = ['Home', 'Quick Start', 'Protractor Setup', 'Protractor Tests', 'Reference'];
//         expect(await hp.header.getTextForEach('mainItems')).toEqual(headerItems);
//     });
//   });
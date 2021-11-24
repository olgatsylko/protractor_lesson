
class BaseObject{

    async isDisplayed(element) {
        return await this[element].isDisplayed();
    }

    async getText(element){
        return (await this[element].getText()).trim();
    }

    async getTextForEach(elements){
        let arr = [];
        const count = await this[elements].count();
        for (let i = 0; i < count; i++) { 
            arr.push((await this[elements].get(i).getText()).trim());
        }
        return arr;
    }

    async clickBy (elements, text){
        await this[elements].filter(async function (elem) {
            return (await elem.getText()).trim() === text;
        }).click();
    }

    // async clickBy (elements, textOrPosition){
    //     if (typeof textOrPosition === 'number') {
    //         await this[elements][textOrPosition].click();
    //     } else {
    //         await this[elements].filter(async function (elem) {
    //             return (await elem.getText()).trim() === textOrPosition;
    //         }).click();
    //     }
    // }

}


module.exports = BaseObject;
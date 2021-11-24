
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

}


module.exports = BaseObject;
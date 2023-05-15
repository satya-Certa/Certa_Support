const {locator} = require ('@playwright/test');

class clientHomePage{

    constructor(page) {
        this.page = page; 
        this.processDropdown =page.locator("div[class*=Button]:has-text('Create new')");
        this.processList=page.locator("ul[class*=dropdown]");
        

    }

    async SelectTheProcess(){

       
        await this.processDropdown.click();
        await this.processList.locator("li").waitFor();
        await this.processList.locator("li").first().click();

    }

}

module.exports ={clientHomePage};
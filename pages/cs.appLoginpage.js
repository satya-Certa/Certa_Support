const {locator} = require ('@playwright/test');

class appLoginpage{
    constructor(page) {
        this.page = page;
        this.clientOrProspectBtn = page.locator(".css-racqdc:has-text('Client/Prospect')");
        this.email = page.locator("#email");
        this.requestOTPBtn = page.locator("button[type='submit']");
    }
    async NavigateToApplication(URL){
        await this.page.goto(URL);

    }

    async loginAsClient(ClientEmail){
        await this.clientOrProspectBtn.click();
        await this.email.type(ClientEmail);
        await this.requestOTPBtn.click();
    }

   





}

module.exports ={appLoginpage};
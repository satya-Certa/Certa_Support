const {locator} = require ('@playwright/test');
class homePage{
    constructor(page) {
        this.page = page;
        
        this.taskBtn=page.locator("//span[text()='Tasks']");
        this.recentIssue= page.locator('(//span[@class="breadcrumb-text css-14d5xed-CustomText"])[1]');
        this.clickSearchIcon= page.locator("(//span[@role='button'])[1]");
        this.inputIssueID=page.locator("//input[@class='ant-input']");
        this.clickSearch=page.locator("//span[text()='Search']");
    }
    
    
    async naviToTask(){
        await this.taskBtn.click();
    }
    async clickRecentIssue(){
        await this.recentIssue.click();
    } 
    async searchIssueByID(issueID){
        await this.clickSearchIcon.click();
        await this.inputIssueID.type(issueID);
        await this.clickSearch.click();
    }

}
module.exports ={homePage};
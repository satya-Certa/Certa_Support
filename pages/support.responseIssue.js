const {locator} = require ('@playwright/test');
class responseIssue{
    constructor(page) {
        this.page = page;

        //ack request
        this.checkBoxToAckReq= page.locator('//input[@class="ant-checkbox-input"]');
        this.clickAssignee= page.locator('(//input[@class="ant-select-selection-search-input"])[1]');
        this.selectAssignee= page.locator('(//div[@class="ant-select-item-option-content"])[1]');
        this.submitAck= page.locator('//span[text()="Submit"]');
        //update request for resolved
        this.clickStatusField= page.locator('(//span[@class="ant-select-selection-search"])[1]');
        this.selectStatus= page.locator('//div[text()="Solved"]');
        this.clickRcaField= page.locator('(//input[@class="ant-select-selection-search-input"])[2]');
        this.selectRca= page.locator('(//div[text()="Code miss"])[2]');
        this.textField1= page.locator('//span[text()="Please provide steps taken to avoid this in future"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea');
        this.textField2= page.locator('//span[text()="Please add comments for client"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea');
        this.textField3= page.locator('//span[text()="Add internal comments"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea');
        this.textField4= page.locator('//span[text()="Please mention the resolution comments"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea');
        this.isDeployment= page.locator('(//input[@class="ant-radio-input"])[2]');
        this.submitUpdateRequest= page.locator('//span[text()="Submit"]');

        //update request for need additional info
        this.selectStatusNAI= page.getByText('Need additional info').nth(1);
        this.textField= page.locator('//span[text()="Please mention the information required from client"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea');

        //Edit updated request of need additonal info
        this.clickUpdateRequest= page.locator("(//span[text()='Update Request'])[1]");
        this.clickEdit= page.locator("//button[@class='ant-btn css-1llvq21-Button ant-btn-ghost']");
       }
    
    
    async ackRequest(){
        await this.checkBoxToAckReq.click();
        await this.clickAssignee.click();
        await this.selectAssignee.click();
        await this.submitAck.click();
    }
    async updateRequestResolved(){
        await this.clickStatusField.click();
        await this.selectStatus.click();
        await this.clickRcaField.click();
        await this.selectRca.click();
        await this.textField1.fill('test1');
        await this.textField2.fill('test2');
        await this.textField3.fill('test3');
        await this.textField4.fill('test4');
        await this.isDeployment.click();
        await this.submitUpdateRequest.click();
    }
    async updateRequestNAI(){
        await this.clickStatusField.click();
        await this.selectStatusNAI.click();
        await this.textField.fill('need aditional info');
        await this.submitUpdateRequest.click();
    }

    async editUpdateRequesNAI(){
        await this.clickUpdateRequest.click();
        await this.clickEdit.click();
        await this.textField.fill('need aditional info to resolve the issue');
        await this.submitUpdateRequest.click();
    }

}
module.exports ={responseIssue};
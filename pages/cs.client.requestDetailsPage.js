const { locator,expect } = require('@playwright/test');
const { reportBugPriorityData } = require('../pages/cs.client.reportBugPriority');

class requestDetailsPage {
    constructor(page) {
        this.page = page;

        // Generic locators
        this.topMenuRequestDetails=page.locator(".css-y9nd2k-Stack button span");
        this.topMenuRequestID = page.locator(".css-y9nd2k-Stack span");
        //Locators on 'Request Type' section 1
        this.requestType = page.locator("[class*=picker-label]");
        this.requestTypeList = page.locator("ul.ant-cascader-menu li");
        this.requestTypeSubmit = page.locator("button[type=button]:has-text('Continue')");

        //Locators on 'Request Type' section 2
        this.bugImpactdetails = page.locator("textarea[class='ant-input']");
        this.bugDescription = page.locator("textarea[class='ant-input']");
        this.bugImpactOn = page.locator('.ant-cascader-picker-label');
        this.bugImpactOnList = page.locator("ul.ant-cascader-menu li");
        this.subBugImpactOnList =page.locator("ul.ant-cascader-menu")
        this.bugImpactFor = page.locator("[role='combobox']");
        this.bugImpactForList = page.locator("[style*='flex-direction: column;'] div div");
        this.UserEmailID = page.locator("[type='email']")
        this.specifyGroupName=page.locator("input[type='text']");
        this.continueBtn =page.locator("button[class*='Button ant-btn-primary']");    
        this.alertMesg=page.locator("ant-alert-message");    
        this.workFlow = page.locator(" textarea[class*='ant-input']");
        this.screenshotupload= page.locator("span:has-text('Screenshot')")

       //Locators on 'Request Type' section 3
        this.bugPriority= page.locator(".ant-legacy-form-item-children textarea");
        this.submitBtn =page.locator("button[type=button] span:has-text('Submit')");
        this.requestSubmitedMsg=page.locator(".css-b89a8h-Stack span[class*='CustomText']");
        this.requestSubmited="Request Details step completed";
        }

    //Selecgting the Requited Request Type for the DropdownList
    async SelectTheRequestType(RequestType) {
        const MenuRequestDetails ="Request Details";
        const MenuRequestType="SUPPORT-BUG";

        //assert to check the navigated to 'Request type' section
        await expect(this.topMenuRequestDetails.first()).toHaveText(MenuRequestDetails);

        //click the 'Request Type' dropdown
        await this.requestType.click();

        // get the count of Requesttype and loop to Select tha field
        //await this.requestTypeList.waitFor();
        await this.page.waitForTimeout(2000);   
        const listCount = await this.requestTypeList.count();
        for (let i=0;i<listCount;++i) {
            const requestValue = await this.requestTypeList.nth(i).textContent();
            if (requestValue === RequestType) {
                await this.requestTypeList.nth(i).click();
                break;
            }
        }
       

        await this.page.waitForTimeout(3000);  

        // assert to check that the expected Request Type is selected
        const selectedRequestType = await this.topMenuRequestID.first().textContent();
        expect(await selectedRequestType.includes(MenuRequestType)).toBeTruthy();


        // submit the Request Type by clicking 'Submit'
        await this.requestTypeSubmit.click();
     
    }


    //Providing he detail os Bug
    async ProvideBugDetails(ImpactedOn, ImpactedFor, DetailsOfImpact,BugDescription,FilePath, UserEmail,GroupDetails,WorkFlowLink) {
       
        const inputLocator = "input[type='file']";
        const alertmesg="We are sorry to hear about this issue. We will investigate and get back to you";
      

        /*select the 'What is the impact?' dropdown*/
        await this.SelectImpacton(ImpactedOn);

        //selecting the 'Who is impacted?' dropdown
       await this.selectWhoIsImpacted(ImpactedFor,UserEmail,GroupDetails)
        

        //Providing the 'Add more details about the impact' textbox
        await this.bugImpactdetails.nth(0).type(DetailsOfImpact);
        //Provide the Workflow Link
        if(ImpactedOn !== 'Access Issues'){
           await this.workFlow.nth(2).type(WorkFlowLink)
        }
        //Providing the 'Please specify the user email id' textbox
        await this.bugDescription.nth(0).type(BugDescription);
        //uploading the file
        await this.screenshotupload.click();
        await this.page.setInputFiles(inputLocator, FilePath);

        //assert to check the alert Message
        await this.alertMesg.isVisible();
        //await expect(await this.alertMesg.textContent()).toHaveText(alertmesg);

        await this.page.waitForTimeout(2000);
        //clicking on continue button
        await this.continueBtn.click();
             
    }

    /*Method to Check the Priority of a Bug and submit the bug*/ 
    async CheckPriorityAndSubmit(ImpactedOn,ImpactedFor){
        //checking the Priority value
        const priorityVlaue = await this.reportBugPriority(ImpactedOn,ImpactedFor);
        const priorityDisplayed =this.bugPriority.textContent();
        await expect(this.bugPriority).toHaveText(priorityVlaue);
     

        //Click on Submit Button
        await this.submitBtn.click();
        await this.page.waitForTimeout(5000);

    }

    //method to validate the sucess message and capture the Bug ID
    async RequiredBugIDDetails(){
        //Verify the sucess Message
        expect(await this.requestSubmitedMsg).toHaveText(this.requestSubmited);  
        const requiredBugID = await this.topMenuRequestID.first().textContent();
        return requiredBugID;

    }

    /*method for Selection of 'What is Impact?' dropdown*/
    async SelectImpacton(ImpactedOn){
        await this.bugImpactOn.click();
        await this.page.waitForTimeout(2000);
        const subBugImpactOnList = this.subBugImpactOnList.nth(1);
        const impactOnCount = await this.bugImpactOnList.count();                 

        for (let i = 0; i < impactOnCount; i++) {
            const impactOnValue = await this.bugImpactOnList.nth(i).textContent();    
            if(impactOnValue==='Integrations' || impactOnValue==='Supplier Records'){
            await this.bugImpactOnList.nth(i).click();
            const subImpactOnCount = await this.subBugImpactOnList.locator('li').count();
            
                for (let j = 0; j < subImpactOnCount; ++j) {
                    const subimpactOnValue = await this.subBugImpactOnList.locator('li').nth(j).textContent();
                    if (subimpactOnValue === ImpactedOn) {
                        await this.subBugImpactOnList.locator('li').nth(j).click();
                        break;
                    }
                }               
             }
                else if (impactOnValue === ImpactedOn) {
                    await this.bugImpactOnList.nth(i).click();
                    break;
                }
        }        
    }   

    async selectWhoIsImpacted(ImpactedFor,UserEmail,GroupDetails){
       
        await this.bugImpactFor.click();
        await this.page.waitForTimeout(2000);
        
       const impactforCount = await this.bugImpactForList.count();
         for (let i = 0; i < impactforCount; ++i) {
            const impactForValue = await this.bugImpactForList.nth(i).textContent(); 
                   
            if (impactForValue.includes(ImpactedFor)) {
               this.page.getByText(impactForValue).nth(1).click();
             //providing the 'UserEmail' based on 'Who is impacted' dropdown          
               if (impactForValue.includes("Single User")) {
                await this.UserEmailID.fill(UserEmail);
                }
                //providing the 'group' based on 'Who is impacted' dropdown 
                else if(impactForValue.includes("Group")){
                    await this.specifyGroupName.nth(1).type(GroupDetails)
                }
                break;
            }
        }
    }
    async reportBugPriority(ImpactedOn,ImpactedFor){
        const priority = await reportBugPriorityData.find(item => item.impactedOn === ImpactedOn && item.impactedFor === ImpactedFor).priority;
        return priority;

    }
}
module.exports = { requestDetailsPage };
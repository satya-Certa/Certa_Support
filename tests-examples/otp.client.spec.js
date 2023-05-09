import { test, expect, chromium } from '@playwright/test';
const Mailosaur = require('mailosaur');

 test('login Client', async() =>{
    try {

        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://internal.certaqa.com/');
        //await page.goto('https://internal.certaqa.com/login?next=%2F');
        await page.getByRole('link', { name: 'Client/Prospect' }).click();
        await page.getByTestId('otpform-login-email').click();
        await page.getByTestId('otpform-login-email').fill('kusum+client@ymb5w90b.mailosaur.net');
        await page.getByTestId('otpform-login-submit').click();
        await page.waitForTimeout(5000);
        const otp = await getOTP()
        console.log("otp" + otp);
        await page.locator("//input[@aria-label='Please enter verification code. Digit 1']").type(otp);
        await page.locator("//button[@class='ant-btn css-1llvq21-Button ant-btn-primary ant-btn-block']").click();
        await page.waitForTimeout(5000);
    } catch (error) {
        console.log(error)
    }
})


 test("Client first test", async () => {

    const context = await browser.newContext();
    const page = await context.newPage();
    //const loginPage = new LoginPage(page);
  
    await page.goto('https://internal.certaqa.com/');
    await page.getByRole('link', { name: 'Client/Prospect' }).click();
    await page.getByTestId('otpform-login-email').click();
    await page.getByTestId('otpform-login-email').fill('kusum+client@ymb5w90b.mailosaur.net');
    await page.getByTestId('otpform-login-submit').click();
    await page.waitForTimeout(5000);
    const otp = await getOTP();
    console.log("otp" + otp);
    await page.locator("//input[@aria-label='Please enter verification code. Digit 1']").type(otp);
    await page.locator("//button[@class='ant-btn css-1llvq21-Button ant-btn-primary ant-btn-block']").click();
    await page.waitForTimeout(3000);
    
});

async function getOTP() {
    const mailosaurApiKey = '5GlcZBcWXilMJoaXNpJLNBQAXdHSgRLZ';
    const mailosaurServerId = 'ymb5w90b';
    const mailosaurClient = new Mailosaur(mailosaurApiKey);

    const searchCriteria = {
        sentTo: 'kusum+client@ymb5w90b.mailosaur.net',
        subject: 'OTP for Certa login',
        receivedAfter: new Date(Date.now() - 30000) // Search for messages received in the last 5 minutes
    };

    const messages = await mailosaurClient.messages.search(mailosaurServerId, searchCriteria);
    console.log("messages" + messages);
    const messageSummary = messages.items[0]; // Assume the first message in the search results is the one containing the OTP
    console.log("messageSummary" + messageSummary)
    const messageId = messageSummary.id;
    console.log("messageId" + messageId)
    const message = await mailosaurClient.messages.getById(messageId);
    console.log("message" + message)
    const otp = message.html.body.match(/(\d{6})/)[1];
    console.log("otp" + otp)
    mailosaurClient.messages.deleteAll(mailosaurServerId);
    return otp;

}

//module.exports=getOTP;










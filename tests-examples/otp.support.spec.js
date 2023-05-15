import { test, expect, chromium } from '@playwright/test';
const Mailosaur = require('mailosaur');


test('login support', async() =>{
    try {

        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://support.certaqa.com/');
        await page.getByRole('link', { name: 'Certa Support Supplier' }).click();
        await page.getByTestId('otpform-login-email').fill('kusum+support@bax4kyyk.mailosaur.net');
        await page.getByTestId('otpform-login-submit').click();
        await page.waitForTimeout(5000);
        const otp = await OTP()
        console.log("otp" + otp);      
        await page.getByRole('textbox', { name: 'Please enter verification code. Digit 1' }).type(otp);
        await page.getByTestId('otpform-login-submit').click();
        await page.waitForTimeout(5000);
    } catch (error) {
        console.log(error)
    }
})



 async function OTP() {
    const mailosaurApiKey = 'B5WrfnU7TbcdhBA56X7O08u7xYlSNFoP';
    const mailosaurServerId = 'bax4kyyk';
    const mailosaurClient = new Mailosaur(mailosaurApiKey);

    const searchCriteria = {
        sentTo: 'kusum+support@bax4kyyk.mailosaur.net',
        subject: 'OTP for Certa Support',
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












import { test, expect, chromium } from '@playwright/test';
const Mailosaur = require('mailosaur');


//Client OTP Login
export async function getOTP() {
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

//support OTP Login
export async function OTP() {
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















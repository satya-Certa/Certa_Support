import { test, expect } from '@playwright/test';
import { getOTP, OTP } from '../pages/otp.spec';
const { homePage } = require('../pages/support.homePage');
const { responseIssue } = require('../pages/support.responseIssue');

test("Report a bug", async ({ page }) => {

  await page.goto("https://internal.certaqa.com/");
  await page.getByRole('link', { name: 'Client/Prospect' }).click();
  await page.locator('//input[@id="email"]').click();
  await page.locator('//input[@id="email"]').fill('kusum+client@ymb5w90b.mailosaur.net');
  await page.locator('//button[@type="submit"]').click();
  await page.waitForTimeout(5000);
  const otp = await getOTP();
  console.log("otp" + otp);
  await page.locator("//input[@aria-label='Please enter verification code. Digit 1']").type(otp);
  await page.locator('//button[@type="submit"]').click();
  await page.waitForTimeout(3000);
  await page.locator("//div[contains(text(),'Create new')]").click();
  await page.locator("//div[contains(text(),'Certa Support')]").click();
  await page.waitForTimeout(5000);
  //await page.pause();
  await page.locator("//span[@class='ant-cascader-picker-label']").click();
  await page.locator("//ul//li[text()='Report a bug']").click();
  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[5]").click();
  await page.locator('.ant-cascader-picker-label').click();
  await page.getByRole('menuitem', { name: 'Integrations right' }).click();
  await page.getByRole('menuitem', { name: 'Screening' }).click();
  await page.locator('//input[@class="ant-select-selection-search-input"]').click();
  await page.locator('//div[@id="7679c25c-3d36-4d78-8d54-d302405bd552"]').click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('tests');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Testing qa');
  await page.locator("(//textarea[@class='ant-input'])[3]").fill("https://internal.certaqa.com/process/15907/wizard/?field=2253326&group=46098&step=99715");
  await page.locator('(//span[@class="field-label-text css-8jinf7-CustomText"])[3]').click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(5000);
  //await expect(page.locator("//span[@class='css-159s1wv-CustomText']")).toHaveText('Request Submitted');
  console.log('1st test completed issue reporting');
  //await page.close();

});

test("Response on reported bug as resolved", async ({ page }) => {

  await page.goto('https://support.certaqa.com/');
  await page.getByRole('link', { name: 'Certa Support Supplier' }).click();
  await page.locator("//input[@id='email']").fill('kusum+support@bax4kyyk.mailosaur.net');
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(5000);
  const otp = await OTP()
  console.log("otp" + otp);
  await page.locator("(//input[@class='css-19ky68w '])[1]").type(otp);
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(3000);
  const HomePage = new homePage(page);
  const AckReq = new responseIssue(page);
  await HomePage.naviToTask();
  
  await page.reload();
  await HomePage.clickRecentIssue();
  await AckReq.ackRequest();
  await page.waitForTimeout(5000);
  await AckReq.updateRequestResolved();
  await expect(page.locator("//span[@class='css-1dlvumy-CustomText']")).toHaveText('Pending Validation');
  await page.close();

});





test('Ask a question', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://internal.certaqa.com/");
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
  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[1]").click();
  await page.locator("//div[text()='Certa Support']").click();
  console.log(await page.title());
 
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'Expanded view' }).click()
  ])

  console.log(await newPage.title());
  await newPage.locator("//span[@class='ant-cascader-picker-label']").click();
  await newPage.locator("//ul//li[text()='Ask a question']").click();
  await newPage.waitForTimeout(5000);
  await newPage.locator('//span[text()="Please describe your query"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea').type("Testing ask a question");
  await newPage.getByRole('button', { name: 'Submit' }).click();
  //await expect(page.locator("//span[@class='css-1dlvumy-CustomText']")).toHaveText('Request Submitted');
  console.log('2st test completed asking a quetion');
});


test('Sugetion and improvment', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://internal.certaqa.com/");
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
  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[1]").click();
  await page.locator("//div[contains(text(),'Certa Support')]").click();

  const [newPage1] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'Expanded view' }).click()
  ])

  console.log(await newPage1.title());
  await newPage1.locator("//span[@class='ant-cascader-picker-label']").click();
  await newPage1.locator("//ul//li[text()='Suggestion/Improvement']").click();
  await newPage1.pause();
  await newPage1.waitForTimeout(5000);
  await newPage1.locator('//span[text()="Please describe your suggestion in detail"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea').type("Testing Suggestion/Improvement");
  await newPage1.getByRole('button', { name: 'Submit' }).click();
  //await expect(page.locator("//span[@class='css-1dlvumy-CustomText']")).toHaveText('Request Submitted');
  console.log('3rd test completed asking a quetion');
});

/*
test('report a bug in expanded view', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://internal.certaqa.com/");
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
  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[1]").click();
  await page.locator("//div[contains(text(),'Certa Support')]").click();

  const [newPage1] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'Expanded view' }).click()
  ])

  console.log(await newPage1.title());
  await newPage1.locator("//span[@class='ant-cascader-picker-label']").click();
  await newPage1.locator("//ul//li[text()='Report a bug']").click();
  await newPage1.waitForTimeout(5000);
  await newPage1.locator("(//input[@type='text'])[2]").click();
  await newPage1.locator("//li[text()='Dashboard and Report']").click();
  await newPage1.locator("//input[@class='ant-select-selection-search-input']").click();
  await newPage1.locator("//div[text()='Single User']").click();
  await newPage1.locator("//input[@type='email']").type("test1@getcerta.com");
  await newPage1.getByRole('button', { name: 'Submit' }).click();
  //await expect(page.locator("//span[@class='css-1dlvumy-CustomText']")).toHaveText('Request Submitted');
  console.log('4th test completed asking a quetion');
});*/



test('Access for single user in expanded view', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://internal.certaqa.com/");
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
  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[1]").click();
  await page.locator("//div[contains(text(),'Certa Support')]").click();

  const [newPage1] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'Expanded view' }).click()
  ])

  console.log(await newPage1.title());
  await newPage1.locator("//span[@class='ant-cascader-picker-label']").click();
  await newPage1.locator("//li[@title='Access']").click();
  await newPage1.locator("//li[@title='Add a user']").click();
  await newPage1.waitForTimeout(5000);
  await newPage1.locator("//input[@value='Single User']").click();
  await newPage1.pause();
  await newPage1.waitForTimeout(3000);
  await newPage1.locator("(//input[@class='ant-input'])[1]").type("Kusum V");
  await newPage1.locator("//input[@type='email']").type("test1@getcerta.com");
  await newPage1.locator("(//input[@class='ant-input'])[4]").type("Cust Group")
  const filepath ="C:/Users/91922/Downloads/testabc.jpg";
  await newPage1.setInputFiles("input[type='file']", filepath);
  await newPage1.locator("//input[@value='true']").click();
  await newPage1.getByRole('button', { name: 'Submit' }).click();
  //await expect(page.locator("//span[@class='css-1dlvumy-CustomText']")).toHaveText('Request Submitted');
  console.log('5th test completed asking a quetion');
  await newPage1.close();
});

test('Access for multi user in expanded view', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://internal.certaqa.com/");
  await page.getByRole('link', { name: 'Client/Prospect' }).click();
  await page.locator('//input[@id="email"]').click();
  await page.locator('//input[@id="email"]').fill('kusum+client@ymb5w90b.mailosaur.net');
  await page.locator('//button[@type="submit"]').click();
  await page.waitForTimeout(5000);
  const otp = await getOTP();
  console.log("otp" + otp);
  await page.locator("//input[@aria-label='Please enter verification code. Digit 1']").type(otp);
  await page.locator('//button[@type="submit"]').click();
  await page.waitForTimeout(3000);
  await page.locator("//div[contains(text(),'Create new')]").click();
  await page.locator("//div[contains(text(),'Certa Support')]").click();

  const [newPage1] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'Expanded view' }).click()
  ])

  console.log(await newPage1.title());
  await newPage1.locator("//span[@class='ant-cascader-picker-label']").click();
  await newPage1.locator("//li[@title='Access']").click();
  await newPage1.locator("//li[@title='Add a user']").click();
  await newPage1.waitForTimeout(5000);
  await newPage1.locator("//input[@value='Multiple Users']").click();
  await newPage1.locator('//span[text()="Download file"]').click();
  
  await newPage1.pause();
  await newPage1.waitForTimeout(3000);
  const filepath ="C:/Users/91922/Downloads/sample.xlsx";
  await newPage1.setInputFiles("input[type='file']", filepath);
  //await expect.soft(page.locator("(//span[text()='Download'])[1]")).toBeVisible();

  const filepath1 ="C:/Users/91922/Downloads/testabc.jpg";
  await newPage1.setInputFiles("input[type='file']", filepath1);
 //await expect.soft(page.locator("(//span[text()='Download'])[2]")).toBeVisible();


  await newPage1.locator("//input[@value='true']").click();
  await newPage1.getByRole('button', { name: 'Submit' }).click();
  //await expect(page.locator("//span[@class='css-1dlvumy-CustomText']")).toHaveText('Request Submitted');
  console.log('6th test completed asking a quetion');
  await newPage1.close();
});


test('Change user Access for single user in expanded view', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://internal.certaqa.com/");
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
  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[1]").click();
  await page.locator("//div[contains(text(),'Certa Support')]").click();

  const [newPage1] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'Expanded view' }).click()
  ])

  console.log(await newPage1.title());
  await newPage1.locator("//span[@class='ant-cascader-picker-label']").click();
  await newPage1.locator("//li[@title='Access']").click();
  await newPage1.locator("//li[@title='Change user access']").click();
  await newPage1.waitForTimeout(5000);
  await newPage1.locator("//input[@value='Single User']").click();
  await newPage1.waitForTimeout(3000);
  await newPage1.locator("//input[@type='email']").type("test1@getcerta.com");
  await newPage1.locator("(//input[@type='text'])[2]").type("Tester");
  await newPage1.locator("(//input[@type='text'])[3]").type("Dev")
  const filepath ="C:/Users/91922/Downloads/testabc.jpg";
  await newPage1.setInputFiles("input[type='file']", filepath);
  await newPage1.locator("//input[@value='true']").click();
  await newPage1.getByRole('button', { name: 'Submit' }).click();
  //await expect(page.locator("//span[@class='css-1dlvumy-CustomText']")).toHaveText('Request Submitted');
  console.log('7th test completed asking a quetion');
  await newPage1.close();
});




test('Change user Access for multi user in expanded view', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://internal.certaqa.com/");
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
  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[1]").click();
  await page.locator("//div[contains(text(),'Certa Support')]").click();

  const [newPage1] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'Expanded view' }).click()
  ])

  console.log(await newPage1.title());
  await newPage1.locator("//span[@class='ant-cascader-picker-label']").click();
  await newPage1.locator("//li[@title='Access']").click();
  await newPage1.locator("//li[@title='Change user access']").click();
  await newPage1.waitForTimeout(5000);
  await newPage1.locator("//input[@value='Multiple Users']").click();
  await newPage1.pause();
  await newPage1.waitForTimeout(3000);
  const filepath ="C:/Users/91922/Downloads/sample.xlsx";
  await newPage1.setInputFiles("input[type='file']", filepath);
  //await expect.soft(page.locator("(//span[text()='Download'])[1]")).toBeVisible();

  const filepath1 ="C:/Users/91922/Downloads/testabc.jpg";
  await newPage1.setInputFiles("input[type='file']", filepath1);
 // await expect.soft(page.locator("(//span[text()='Download'])[2]")).toBeVisible();


  await newPage1.locator("//input[@value='true']").click();
  await newPage1.getByRole('button', { name: 'Submit' }).click();
  //await expect(page.locator("//span[@class='css-1dlvumy-CustomText']")).toHaveText('Request Submitted');
  console.log('6th test completed asking a quetion');
  await newPage1.close();
});
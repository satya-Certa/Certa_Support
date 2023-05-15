import { test, expect } from '@playwright/test';
import { OTP } from '../pages/otp.spec';

test("Response on reported bug with no deployment needed", async ({ browser }) => {

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
  await page.waitForTimeout(3000);
  await page.locator('(//div[@class="css-j1x67s-Stack"])[3]').click();
  await page.reload();
  await page.locator('(//span[@class="breadcrumb-text css-14d5xed-CustomText"])[1]').click();
  await page.locator('//input[@class="ant-checkbox-input"]').click();
  await page.locator('(//input[@class="ant-select-selection-search-input"])[1]').click();
  await page.locator('(//div[@class="ant-select-item-option-content"])[1]').click();
  await page.locator('//span[text()="Submit"]').click();
  await page.waitForTimeout(10000);
  await page.locator('(//span[@class="ant-select-selection-search"])[1]').click();
  await page.locator('(//span[@class="ant-select-selection-search"])[1]').click();
  await page.locator('//div[text()="Solved"]').click();
  await page.locator('(//input[@class="ant-select-selection-search-input"])[2]').click();
  await page.locator('(//div[text()="Code miss"])[2]').click();
  await page.type('//span[text()="Please provide steps taken to avoid this in future"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea', 'follow the docu provided')
  await page.type('//span[text()="Please add comments for client"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea', 'follow the steps')
  await page.type('//span[text()="Add internal comments"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea', 'aditonal comments')
  await page.type('//span[text()="Please mention the resolution comments"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea', 'testing')
  await page.locator('(//span[@class="field-label-text css-8jinf7-CustomText"])[3]').click();
  await page.locator('(//input[@class="ant-radio-input"])[2]').click();
  await page.locator('//span[text()="Submit"]').click();
  await expect(page.locator("//span[@class='css-1dlvumy-CustomText']")).toHaveText('Pending Validation');
  await page.close();

});

test("Need additional info", async ({ browser }) => {

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
  await page.waitForTimeout(3000);
  await page.locator('(//div[@class="css-j1x67s-Stack"])[3]').click();
  await page.reload();
  await page.locator('(//span[@class="breadcrumb-text css-14d5xed-CustomText"])[1]').click();
  await page.locator('//input[@class="ant-checkbox-input"]').click();
  await page.locator('(//input[@class="ant-select-selection-search-input"])[1]').click();
  await page.locator('(//div[@class="ant-select-item-option-content"])[1]').click();
  await page.locator('//span[text()="Submit"]').click();
  await page.waitForTimeout(10000);
  await page.locator('(//span[@class="ant-select-selection-search"])[1]').click();
  await page.locator('(//span[@class="ant-select-selection-search"])[1]').click();
  await page.getByText('Need additional info').nth(1).click();
  await page.type('//span[text()="Please mention the information required from client"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea', 'Please provide more details')
  await page.locator('//span[text()="Submit"]').click();

});

test("Response on reported bug with deployment needed", async ({ browser }) => {

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
  await page.waitForTimeout(3000);
  await page.locator('(//div[@class="css-j1x67s-Stack"])[3]').click();
  await page.reload();
  await page.locator('(//span[@class="breadcrumb-text css-14d5xed-CustomText"])[1]').click();
  await page.locator('//input[@class="ant-checkbox-input"]').click();
  await page.locator('(//input[@class="ant-select-selection-search-input"])[1]').click();
  await page.locator('(//div[@class="ant-select-item-option-content"])[1]').click();
  await page.locator('//span[text()="Submit"]').click();
  await page.waitForTimeout(10000);
  await page.locator('(//input[@class="ant-select-selection-search-input"])[2]').click();
  await page.keyboard.press('Enter'); 
  await page.type('//span[text()="Please add more details about RCA"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea', 'Teting on RCA part')
  await page.type('//span[text()="Please mention the resolution comments"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea', 'testing for resolution comment')
  await page.locator('(//input[@class="ant-radio-input"])[1]').click();
  await page.locator("//input[@class='ant-checkbox-input']").click();
  await page.locator('.ant-picker-input').click();
  await page.locator('.ant-picker-header-next-btn').click();
  await page.getByRole('row', { name: '4 5 6 7 8 9 10' }).getByText('9').click();
  const filepath ="C:/Users/91922/Downloads/testabc.jpg";
  await page.setInputFiles("input[type='file']", filepath);

  const filepath0 ="C:/Users/91922/Downloads/testabc.jpg";
  await page.setInputFiles("input[type='file']", filepath0);

  await page.pause();
  await page.locator('//span[text()="Submit"]').click(); 
  //await page.close();

});



test("Edit response", async ({ browser }) => {

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
  await page.waitForTimeout(3000);
  await page.locator('(//div[@class="css-j1x67s-Stack"])[3]').click();
  await page.reload();
  await page.locator('(//span[@class="breadcrumb-text css-14d5xed-CustomText"])[1]').click();
  await page.locator('//input[@class="ant-checkbox-input"]').click();
  await page.locator('(//input[@class="ant-select-selection-search-input"])[1]').click();
  await page.locator('(//div[@class="ant-select-item-option-content"])[1]').click();
  await page.locator('//span[text()="Submit"]').click();
  await page.waitForTimeout(10000);
  await page.locator('(//span[@class="ant-select-selection-search"])[1]').click();
  await page.locator('(//span[@class="ant-select-selection-search"])[1]').click();
  await page.getByText('Need additional info').nth(1).click();
  await page.type('//span[text()="Please mention the information required from client"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea', 'Please provide more details')
  await page.locator('//span[text()="Submit"]').click();
  await page.waitForTimeout(10000);
  await page.getByText('Update RequestAS').click();
  //await page.getByRole('button', { name: 'Edit' }).click();

  //await page.locator("(//span[text()='Update Request'])[1]").check();
  await page.locator("//button[@class='ant-btn css-1llvq21-Button ant-btn-ghost']").click();
  await page.type('//span[text()="Please mention the information required from client"]//ancestor::div[contains(@class,"ant-col ant-legacy")]/following-sibling::div//textarea', 'Please provide more details to resolve the issue')
  await page.locator('//span[text()="Submit"]').click();


});



 //await page.keyboard.press('ArrowDown');
 // await page.keyboard.press('Enter');
 /*await page.locator("//span[@class='ant-picker-suffix']").click();
 await page.locator("//button[@class='ant-picker-header-next-btn']").click();
 await page.locator("//div[text()='9']").click();
 await page.locator('//input[@class="ant-checkbox-input"]').click();*/
 //await page.locator('(//span[@class="field-label-text css-8jinf7-CustomText"])[3]').click();
// await page.locator('(//input[@class="ant-radio-input"])[2]').click();

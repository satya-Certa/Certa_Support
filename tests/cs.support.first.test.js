import { test, expect } from '@playwright/test';
import { OTP } from '../pages/otp.spec';

test("Login Support certaqa", async ({ browser }) => {

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
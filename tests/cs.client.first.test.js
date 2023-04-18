import { test, expect } from '@playwright/test';
import { getOTP } from '../pages/otp.spec'

test("Client first test", async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

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
  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[1]").click();
  await page.locator("//div[contains(text(),'Certa Support')]").click();
  await page.waitForTimeout(10000);
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
  await page.getByRole('textbox').nth(2).fill('https://internal.certaqa.com/process/15907/wizard/?field=2253326&group=46098&step=99715');
  await page.locator('(//span[@class="field-label-text css-8jinf7-CustomText"])[3]').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator("//span[@class='css-159s1wv-CustomText']")).toHaveText('Request Submitted');
  //await page.close();

  //---------------------------------------------------------------------------------------------------------------------------------------//
  await page.locator("(//button[@class='ant-btn css-1pxfzzn-Button ant-btn-default'])[1]").click();
  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[1]").click();
  await page.locator("//div[text()='Certa Support']").click();
 // const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Expanded view' }).click();
 // const page1 = await page1Promise;
  await page.locator("//span[@class='ant-cascader-picker-label']").click();
  await page.locator("//ul//li[text()='Report a bug']").click();
  //test.setTimeout(120000);
  await page.locator('(//span[@class="ant-cascader-picker-label"])[2]').click();
  await page.getByRole('menuitem', { name: 'Access Issues' }).click();
  await page.locator('.ant-select-selector').click();
  await page.getByText('All').nth(2).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('script testing');
  await page.getByRole('button', { name: 'Select file' }).click();
  await page.getByRole('button', { name: 'Select file' }).setInputFiles('Untitled.jpg');
  await page.getByRole('button', { name: 'Submit' }).click();


});

/*
test("Report issue in expanded view", async ({ page }) => {

  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[1]").click();
  await page.locator("//div[text()='Certa Support']").click();
 // const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Expanded view' }).click();
 // const page1 = await page1Promise;
  await page.locator("//span[@class='ant-cascader-picker-label']").click();
  await page.locator("//ul//li[text()='Report a bug']").click();
  //test.setTimeout(120000);
  await page.locator('(//input[@class="ant-input ant-cascader-input"])[2]').click();
  await page.getByRole('menuitem', { name: 'Access Issues' }).click();
  await page.locator('.ant-select-selector').click();
  await page.getByText('All').nth(2).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('script testing');
  await page.getByRole('button', { name: 'Select file' }).click();
  await page.getByRole('button', { name: 'Select file' }).setInputFiles('Untitled.jpg');
  await page.getByRole('button', { name: 'Submit' }).click();

});*/


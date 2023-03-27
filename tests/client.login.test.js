import { test, expect } from '@playwright/test';

test("Login Internal certaqa", async ({ browser }) => {

  const context = await browser.newContext({
  storageState: "./auth.json" 
})
  const page = await context.newPage();
  await page.goto('https://internal.certaqa.com/');
  await page.locator("(//span[@class='button-text css-1hr6m4s-CustomText'])[1]").click();
  await page.locator("//div[text()='Certa Support']").click();
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
  await expect(page.locator('//span[@class="css-1ck00r2-CustomText"]')).toHaveText('Request Details step completed');
  await page.close();
  
});


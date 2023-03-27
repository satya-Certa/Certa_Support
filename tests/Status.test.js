import { test, expect } from '@playwright/test';

test("Login Support certaqa", async ({ browser }) => {

  const context = await browser.newContext({
  storageState: "./auth1.json" 
})
  const page = await context.newPage();
  await page.goto('https://support.certaqa.com/');

  //await page.close();
  
});
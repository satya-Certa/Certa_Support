import { test, expect } from '@playwright/test';
//import { getOTP } from '../pages/otp.spec'
import { LoginPage } from '../pages/client.login.test'

test("Client first test", async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  const loginPage = new LoginPage(page);

  await loginPage.visit();
  await loginPage.LoginType;
});
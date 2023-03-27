import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?dsh=S1913050515%3A1679912907107275&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AQMjQ7RBhThpBIlgZ_gIiN9WbNXow5X1jdLSTETORRiNGMMeH-OlyIVSuBD2XZdbQx7P2fNcaGCS&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
  await page.locator('(//input[@class="whsOnd zHQkBf"])[1]').fill('automation.certa@gmail.com');
  await page.locator('//span[text()="Next"]').click();
  await page.locator('//input[@name="Passwd"]').fill('#Automation001');
  await page.waitForTimeout(7000);
  await page.locator('//span[text()="Next"]').click();
  await page.locator('(//input[@class="gb_jf aJh"])[1]').click();
  await page.locator('//div[@id=":29"]').click();
  //await page.close();
});
const {test, expect} = require('@playwright/test');

test.only('Report a bug in expanded view and ', async ({browser}) =>
{
    // To open new browser same as ingonito
    const context = await browser.newContext({
        storageState: "./auth.json" 
       
    }) 
    const page = await context.newPage();
    await page.goto('https://internal.certaqa.com/');
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

   


    
});
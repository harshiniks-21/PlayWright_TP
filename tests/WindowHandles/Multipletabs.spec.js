import{test,expect} from "@playwright/test"
test.skip("MultipleTabs",async({browser})=>{
    // //* creating multiple tabs manually
    // let context=await browser.newContext()
    // let page=await context.newPage();
    // await page.goto("https://www.flipkart.com/");
    // let page2=await context.newPage();
    // await page2.goto("https://www.myntra.com/");
        //* scenario-2[while user interacting if they press any keys sometime the user will navigate to new tab]  /new tab via user actions.
        let context=await browser.newContext()
        let page=await context.newPage();
        await page.goto("https://www.flipkart.com/");
        await page.locator("//span[@class='b3wTlE']").click();
        await page.locator("//input[@name='q']/../../parent::form/child::div/div[1]/input[1]").fill("Shoes");
        await page.locator("//button[@type='submit']").click();
        await page.locator("//a[text()='ROLLZ Running Shoes For Men']").click();
        await page.waitForTimeout(4000);
        console.log(await page.url());






})
test.only("newapp",async({page})=>{
     await page.goto("https://www.redbus.in/");
     //await page.click("//button[@class='navOption___351115']");
     let [page3]=await Promise.all([
        page.waitForEvent('popup'),
        page.click("//a[text()='Contact us']")])
        await page3.click("//i[@class='optionIcon___4a6702 icon icon-account']")
       
})

test.skip("Handling Multiple Windows",async({browser})=>{
   let context=await browser.newContext();
   let page=await context.newPage();
   await page.goto("https://www.flipkart.com/");
   page.locator("//span[@class='b3wTlE']").click();
    await page.locator("//input[@name='q']/../../parent::form/child::div/div[1]/input[1]").fill("Shoes");
    await page.locator("//button[@type='submit']").click();
   page.locator("//a[text()='ROLLZ Running Shoes For Men']").click();
   let [page2]=await Promise.all([
   page.waitForEvent('popup')])
   await expect(await page.url()).not.toBe("https://www.flipkart.com");

})
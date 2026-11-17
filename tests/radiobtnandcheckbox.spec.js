import{test, expect} from "@playwright/test"
test("Radiobtn",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
    // //*click()
    //await page.locator("#attended").click()
    // //*check()
    await page.locator("#attended")//.check()
    await page.waitForTimeout(3000)
    //asserting
    // await expect(await page.locator("#attended")).toBeChecked()
    await expect(await page.locator("#attended").isChecked()).toBeFalsy();

})
test.only("Checkbox",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
await page.locator("#domain_b").check()
await page.waitForTimeout(3000);
await expect(await page.locator("#domain_b")).toBeChecked()
await page.locator("#domain_b").uncheck();
await page.waitForTimeout(2000);
await expect(await page.locator("#domain_b").isChecked()).toBeFalsy();

})
import{test,expect} from "@playwright/test"
test("Multiple window",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2");
     let [window2]=await Promise.all([page.waitForEvent('popup'),
      await page.click("//button[text()='Shop Now']")])
     await window2.locator("//button[text()='Add to Cart']").click();
})
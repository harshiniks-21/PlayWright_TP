import {test} from "@playwright/test"
test("ExplicitWait",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("Shoes")
    await page.locator('//div[@role="row"]',{hasText: "for woman"}).waitFor()
    let a=await page.locator('//div[@role="row"]',{hasText: "for woman"}).allTextContents()
    console.log(a)
})

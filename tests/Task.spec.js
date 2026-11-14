import{test}from "@playwright/test"
test("Task",async({browser})=>{
   let browserr= await browser.newContext();
  let page= await browserr.newPage();
 await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
})
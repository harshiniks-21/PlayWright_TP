//! Browser Controls in Playwright refer to a set of commanda or methods used to programatically control and interact with the browser during automated testing.
//browser controls
//1. browser.newContext()=>Creates a new Browser context(like a fresh browser profile)
//2.browser.close()=>by default the tab will get close after execution in JS but when we created a multiple tabs and wants to close specific tab we can use this method.
//3.page.goto
//4.page.reload
//5.page.goback
//6.page.goForward
//7.page.close->close the browser instance.
//8.browser.newPage
//9.context.close
//10.page.setViewportSize
//11.page.screenshot
//12.page.viewPortSize
//13.page.url->navigates to a specific URL.
//14.context.newPage()->opens new tab/page in the browser context.


import {chromium, firefox, test} from "@playwright/test"
test("Browser controls",async({page})=>{
    await page.goto("https://www.google.com/")
    await  page.setViewportSize({width:200,height:100})
    
})
//! page.viewportSize()
test("viewPort",async({page})=>{
    await page.goto("https://www.google.com/")
    
     let vp=await page.viewportSize(); 
     console.log(vp)
})
//! page.title()
test("Title",async({page})=>{
    await page.goto("https://www.amazon.com/")
    let title= await page.title()
    console.log(title)

})
//! page.url
test("URL",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    console.log(await page.url())
})
// test("Cookies",async({browser})=>{
//     let context=await  browser.newContext();
//     let page=await context.newPage();
//     await page.goto("https://www.flipkart.com/")
//    console.log(await context.cookies());

// })
//! chromiunm.launch()=>Launches a Chromium browser instances.
test("ChromiumInstance",async()=>{
   let browser =await firefox.launch()
   let context=await browser.newContext()
   let page= await context.newPage()
   await page.goto("https://www.flipkart.com/")
})
// test.only("ScreenShot",async({page})=>{
//     await page.goto("https://www.flipkart.com/");
//     await page.screenshot({path:"Screenshot/ss.png"})
//      let time=new Date().getTime();
//      await page.screenshot({path:`screenshot/-page-${time}.png`})
// })
//the below script will not provide screenshot inside a folder. 
//so we can add single forward slash after screenshot within the path.
// test.only("ScreenShot",async({page})=>{
//     await page.goto("https://www.flipkart.com/");
//     await page.screenshot({path:"Screenshot/ss.png"})
//      let time=new Date().getTime();
//      await page.screenshot({path:`screenshot/-page-${time}.png`})
// })












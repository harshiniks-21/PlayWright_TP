//!Page fixture
import{test} from "@playwright/test"
// test("fixtures",async({page})=>{
// await page.goto("https://www.google.com/");
// })
//!Browser Fixture.
// test("fixtures",async({browser})=>{
// // await page.goto("https://www.google.com/");
// let context= await browser.newContext();
// let page =await context.newPage();
// await page.goto("https://www.google.com/");
// })
//! Browser Name.
test("fixtures",async({browserName,browser})=>{
// await page.goto("https://www.google.com/");
console.log(browserName)
let context= await browser.newContext();
let page =await context.newPage();
await page.goto("https://www.google.com/");
})

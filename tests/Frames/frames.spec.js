import{test,expect} from "@playwright/test"
// test("Frames",async({page})=> {
//     await page.goto("https://ui.vision/demo/webtest/frames/");
//     //! How to print total frames in the page.
//     let frames=await page.frames()
//     console.log(frames.length);
//     for( let frm of frames)
//     {
//          console.log(await frm.title())
//     }
//     console.log(await page.title())
// })

test("framebyurl",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
     let frame1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1"
})
console.log(frame1)
       await frame1.locator("//input[@name='mytext1']").fill("asdfghj")
       await expect(await frame1.locator("//input[@name='mytext1']").inputValue()).toContain('asdfghj');


 })
 //! using frame locator:
 //src="frame_1.html"
//  test.only("framelocator",async({page})=>{
//      await page.goto("https://ui.vision/demo/webtest/frames/");
    //  let store= page.frameLocator('//frame[@src="frame_1.html"]').locator('//input[@name="mytext1"]')
    //  await store.fill("HII")
    

//     //!A3
//     let frame2=await page.locator('//frame[@src="frame_2.html"]').contentFrame();
//     frame2.locator('//input[@name="mytext2"]').fill("Byee")
//     await page.waitForTimeout(3000);
//  })

 //!nested frame.
 test.only("Nested frame",async({page})=>{
     await page.goto("https://ui.vision/demo/webtest/frames/");
     let frame3=await page.frameLocator("//frame[@src='frame_3.html']");
     await frame3.locator("//input[@name='mytext3']").fill("Frame3");
     let radio=await frame3.frameLocator("//iframe").locator('(//div[@class="AB7Lab Id5V1"])[1]')
      await radio.click();
})
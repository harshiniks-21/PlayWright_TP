import{test,expect} from "@playwright/test"
test("Frames",async({page})=> {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    //! How to print total frames in the page.
    await page.locator() 
})
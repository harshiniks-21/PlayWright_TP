import{test} from "@playwright/test"
test("Locator",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
     //enter username
    await page.locator("//input[@name='username']").fill("student");
    //enter password 
    await page.locator("//input[@name='password']").fill("Password123");
    //click on login button.
    await page.locator("//button[@id='submit']").click();
})
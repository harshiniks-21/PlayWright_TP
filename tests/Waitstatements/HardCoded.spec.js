import{test} from "@playwright/test"
test("Hardcoded",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.waitForTimeout(2000);
    await page.getByText("Username",{exact:true}).fill("student");
    await page.waitForTimeout(2000);
    await page.getByText("Password",{exact:true}).fill("Password123");
    await page.waitForTimeout(2000);
    await page.locator("button#submit").click();
    await page.waitForTimeout(4000);
})
test("AutoSuggest",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill('Shoes')
    await page.waitForTimeout(2000)//hard-coded wait.
    let auto=await page.locator("//span[@class='s-heavy']").allTextContents()
    console.log(auto);
})

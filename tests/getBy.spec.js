import{test} from "@playwright/test"
test("GetBy Methods",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
   //await page.getByLabel("username").fill("harshini12@gmail.com");
    await page.getByLabel("username",{exact:false}).fill("harshini12@gmail.com");
})

//? 2.getByPlaceHolder(“placeholderText”)
test("Placeholder",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder("Search Amazon.in").fill("iphone 17 pro");
})
//? 3.getByText("tetxvalue")
test("TextValue",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByText("Submit").click();
})
//? 4.getByaltText()GFG App on Play Store
test("Text",async({page})=>{
    await page.goto("https://www.geeksforgeeks.org/software-testing/page-object-model-and-page-factory-in-selenium-using-java/");
    await page.getByAltText("GFG App on Play Store").click();
})
//? 5.getByTitle()
test("Title",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByTitle("Search in").click();

})
//?6.getByRole()
test("Role",async({page})=>{
await page.goto("https://www.amazon.in/");
await page.getByRole("link",{name:'Amazon Pay'}).first().click();
})
//?7.getByTestId()
test("GetBytestid",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByTestId("password").fill("pseudo");
})



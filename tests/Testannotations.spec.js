//! Playwright provides annotations to manage test execution for various scenarios:Skipping,Focusing,Marking slow,or expecting Failures.
//? test.skip
//?test.only
//?test.fail
//?test.fixme=>known error is present and fix is required and it will not get executed(it will get skippeda nd will show result as skipped for that particular test).
//?test.slow=>Marks a test as "slow". Slow test will be given triple the default timeout.
//?test.describe=>used to Declare the group of Test.
//?test.timeout
import{test} from "@playwright/test"
test("Annotation-1",async({page})=>{
     console.log("Test-One")
})
test("Annotation-2",async({page})=>{
    console.log("Test-Two")
})
test("Annotation-3",async({page})=>{
    test.slow();//Marks a test as "slow". Slow test will be given triple the default timeou
    console.log("Test-Three")
})
//? conditional skip.
test("Annotation-4",async({browserName})=>{
    test.skip(browserName==="chromium")
    console.log("Test-Four")
})
//?test.only
test.only("Annotation-5",async({page})=>{
    console.log("Test-Five")
})
//?test.fail
test.fail("Annotation-6",async({page})=>{
    console.log("Test-Six")
    await page.goto("https://www.hbgkhsb.com/")
})
//? test.fixme
test.fixme("Annotation-7",async({page})=>{
    console.log("Test-Six")
   
})
test.describe("Login",()=>{

    test("Valid credentials",async({browserName})=>{
    console.log("Valid credentials");
});
test("In-Valid credentials",async({browserName})=>{
    console.log("In-Valid credentials");
});
})
//? test.setTimeout
test("TimeOut",async({page})=>{
      test.setTimeout(20000);
    await  page.goto("https://www.google.com/")
})
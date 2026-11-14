//!Waits
//?  wait statements help to:=>
//? reduce Flakiness,Ensure Consistency across different environments,Improve reliability and reflect actual User Behaviour.
import{test} from "@playwright/test"
//test.use({actionTimeout:5000})//This line is going to set the time for entire script.
test("Check",async({page})=>{
//page.setDefaultTimeout(5000)//when the locator is wrong it will wait 30sec then it will throw the error but we can customize the wait by using this line.inthis case it will wait only for 3 seconds and it will throw error in case locator doesn't match with any one of it's address.
await page.goto("https://practicetestautomation.com/practice-test-login/");
await page.locator("input#username").fill("student");
await page.locator("button#submit").click({timeout:1000});//in this way we can set time for particular line.
})
test("Fill-2",async({page})=>{
//page.setDefaultTimeout(3000)//when the locator is wrong it will wait 30sec then it will throw the error but we can customize the wait by using this line.inthis case it will wait only for 3 seconds and it will throw error in case locator doesn't match with any one of it's address.
await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
await page.locator("input#attendd").check();
})
//!  If we want to add scripts for all the files which is present inside our test folder we can set time under use section in config file =>actionTimeout:5000

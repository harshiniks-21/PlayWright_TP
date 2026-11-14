import{test} from "@playwright/test"
test("ElementControl",async({page})=>{
    //  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    //  //?fill()
    //  await page.locator("#name").fill("Harshini")
    //  //?type
    //  await page.locator("#email").type("harshiniks1@gmail.com")
    //  //?click()
    // //  await page.locator("//button[text()='Register']").click()
    // //  await page.pause(3000);
    // //?inputvalue:=>used to get the text from a text field.
    //  let text1= await page.locator("#name").inputValue()
    //  console.log(text1);

    //?innerText()
    //  let text=await page.locator("//section[@class='poppins text-[14px]' and text()='Radio Button']").innerText();
    // console.log(text);
    // })
    //?TextContent()
    // let text=await page.locator("//section[@class='poppins text-[14px]' and text()='Radio Button']").textContent();
    // console.log(text);
    //?allTextContents()
    // let  altxt=await page.locator("//section[@class='poppins text-[14px]']").allTextContents();
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // // console.log(altxt)//return all the matching elements within an array in the form of array of string.
    // let gender=await page.locator("input#female").getAttribute('type')
    // console.log(gender);
    //all()-this is for selector address which is having Multiple Matches.
    // await page.goto("https://www.flipkart.com/");
    // let ar=await page.locator("//script[@type='module']").all();
    // console.log(ar)//it will return all the matching elements in an array.
    //?isVisible
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
    await page.locator("input#phone").fill("9809876541")
    let b=await page.locator("input#phone").isVisible()
    console.log(b)



    //?isEnabled.
    // await page.goto("https://practicetestautomation.com/practice-test-login/")
    // let a=await page.locator("//button[text()='Submit']").isEnabled
    // console.log(a);
    // //?isDisabled
    // await page.goto("https://practicetestautomation.com/practice-test-login/")
    // let a=await page.locator("//button[text()='Submit']").isDisabled()
    // console.log(a);
//?isChecked
//    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
//    await page.locator("input#domain_b").click()
//    let c= await page.locator("input#domain_b").isChecked()
//    console.log(c)
   //waitFor()
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("input#domain_b").waitFor({state:'visible',timeout:3000})

    })
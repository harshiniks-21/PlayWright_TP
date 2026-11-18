import{test,expect} from "@playwright/test"
test("singleselectdd",async({page})=>{
//await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
//await page.locator("#select3")
//*selectOption()
//await page.locator("#select3").selectOption({value:"India"})
//?label refers to the visible text of an <option> tag.
// await page.locator("#select3").selectOption({label:"India"});
// await page.waitForTimeout(3000);
//?selectByVisibleText()
//await page.locator("#select3").selectOption("India")
//?selectByIndex
//await page.locator("#select3").selectOption({index:8})


//!Handling multi select dropdown which is developed by select tag.

// await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
// await page.locator("#select-multiple-native").selectOption([{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},{value:"Mens Casual Premium Slim Fit T-Shirts "},{value:"Mens Cotton Jacket"}])
//await page.locator("#select-multiple-native").selectOption([{index:1},{index:2},{index:3}])
// await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click();
// await page.waitForTimeout(5000);
//await page.waitForTimeout(3000);

//!Handling Custom DropDown.
// await page.goto("https://www.amazon.in/s?k=shoes&crid=15O4EH7OY7NP8&sprefix=%2Caps%2C429&ref=nb_sb_ss_recent_1_0_recent")
// //await page.locator("//input[@id='twotabsearchtextbox']").fill("Shoes");
// //await page.locator("//input[@id='nav-search-submit-button']").click();
// await page.locator("#s-result-sort-select").click({force:true})
// await page.locator("//a[@class='a-dropdown-link']").first().waitFor()
// let z=await page.locator('//a[@class="a-dropdown-link"]').all()
// console.log(z);
// for(let z1 of z)
// {
//     let txt=await z1.textContent()
//     if(txt.includes("Best "))
//     {
//         await z1.click();
//     }
// }

// await page.waitForTimeout(3000);


//* Direct X-path way.
// await page.locator("#s-result-sort-select_1").click();
// await page.waitForTimeout(4000);
// })

//* await page.waitForTimeout(3000);ariable attached to x-path.
// let text="Price: High to Low"
// await page.locator(`//a[@class="a-dropdown-link" and text()="${text}"]`).click();
// await page.waitForTimeout(4000);
// })

//!Handling Auto Suggest Drop-Down.[based on the value we have passed we will get the suggestion in the drop down].
await page.goto("https://www.amazon.in/")
await page.locator('//input[@id="twotabsearchtextbox"]').fill("Shoes");
await page.waitForSelector("(//div[@class='s-suggestion-container'])[1]")
// let arr=await page.locator("//div[@class='s-suggestion-container']").all();
// for(let option of arr)
// {
//     let text=await option.textContent()
//     if(text.includes(" for men"))
//     {
//          await option.click({force:true});
//          break;
//     }

// }
// await page.waitForTimeout(3000);

//*keyboard actions
await page.keyboard.press("ArrowDown");
await page.keyboard.press("Enter");
await page.waitForTimeout(3000);










})

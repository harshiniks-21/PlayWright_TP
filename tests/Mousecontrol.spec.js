import{test} from "@playwright/test"
//test("Mousecontrol",async({page})=>{
    //!click
    //  await page.goto("https://demoapps.qspiders.com/ui/button");
    //  await page.locator("//button[@id='btn']").click();//By default the click method  is doing left click.
     //for this normal click in the mouse it will click left click.
    //!right click
    // await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
    // await page.locator("//button[@id='btn_a']").click({button: "right"})
    // await page.waitForTimeout(2000);
    //!Double click
    // await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    // //await page.locator("//button[@id='btn_a']").dblclick()
    // await page.locator("//button[@id='btn_a']").click({clickCount:2})
    //!Down & Up
    // await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0");
    // await page.locator("//div[@id='circle']").hover()
    // await page.mouse.down()
    // await page.waitForTimeout(3000);
    // await page.mouse.up();
    // await page.waitForTimeout(3000);/
        //!Disabled or Hidden button.
        // await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4");
        //await page.locator("#submit").click({ force: true });//! way-01
        // //! way-2
        // await page.locator("#submit").dispatchEvent('click')
        // await page.waitForTimeout(4000);
        //hover & Move.
//         await page.goto("https://demoapps.qspiders.com/ui/mouseHover");
//         await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").hover()
//         await page.waitForTimeout(4000);
//         await page.mouse.move(100,200);
//         await page.waitForTimeout(2000);
// })

// test("Scrolling",async({page})=>{
// await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
// await page.waitForTimeout(3000);
// await page.mouse.wheel(0,500)
// await page.waitForTimeout(3000);
// await  page.mouse.wheel(0,-500)
// })
// test("Horozontlscrolling",async({page})=>{
//     // await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal");
//     // await page.waitForTimeout(4000);
//     // await page.mouse.wheel(500,500)
//     // await page.waitForTimeout(3000);

//     //? scroll to a particular element.
//     await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical");
//     await page.waitForTimeout(2000);
//     await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded()
//     await page.waitForTimeout(4000);
// })
test.only("Drag and Drop",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0");
//     await page.locator("//div[text()='Drag Me']").hover()
//     await page.mouse.down();  
//     await page.mouse.move(5000,1000);
//     await page.mouse.up();
//     //Drag & Drop to Target.
//     await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
//     await page.locator("//div[text()='Mobile Charger']").hover();
//     await page.waitForTimeout(2000);
//     await page.mouse.down();
//     await page.locator("//div[text()='Mobile Accessories']/../../div[1]").hover();
//     await page.waitForTimeout(2000);
//     await page.mouse.up()
//         await page.waitForTimeout(2000);

    //div[text()='Mobile Accessories']
   // div[text()='Mobile Accessories']/../../div[1]
    // //* DRAG & DROP BY ELEMENT LOCATION.
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
    await page.locator("//div[text()='Mobile Charger']").hover();
    await page.waitForTimeout(2000);
    await page.mouse.down();
    let box=await page.locator("//div[text()='Mobile Accessories']/parent::div").boundingBox()
    await page.mouse.move(box.x,box.y);
    await page.mouse.up();
    // //*DRAG TO
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
    let source=await page.locator("//div[text()='Mobile Charger']")
    await page.waitForTimeout(2000);
    let target=await page.locator("//div[text()='Mobile Accessories']/parent::div");
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
})
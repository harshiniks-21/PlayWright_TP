import{test} from "@playwright/test"
test("KeyboardActions",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    // await page.locator("input#name").fill("Harsh");
    //!type
    // await page.locator("input#name").type("Harshh");
    // await page.type("input#name","Harshini")
    // await page.locator("input#name").click();
    // await page.waitForTimeout(4000);
    // await page.keyboard.type("Harshini KS")
    //  await page.waitForTimeout(4000);
    //!insert
    await page.locator("input#name").click()
    await page.keyboard.insertText("Harshini")
    await page.waitForTimeout(2000);
    await page.keyboard.down("Space");
    await page.keyboard.up("Space");
    await page.keyboard.down("K");
    await page.keyboard.up("K");
    await page.keyboard.down("Space");
    await page.keyboard.up("Space");
    await page.keyboard.down("S");
    await page.keyboard.up("S");
    await page.waitForTimeout(2000);

    //!press(will do both down and up,whoch means it will do click and release)
    await page.keyboard.press('Tab');
    await page.keyboard.type("harshini1@gmail.com");
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C");
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(2000);
})

test.only("Scrollingusingkeyboardaction",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(2000);
     for(let i=1;i<11;i++)
    {
    await page.keyboard.press('ArrowDown');
    }
    await page.waitForTimeout(2000);
    for(let i=1;i<5;i++)
    {
        await page.keyboard.press('ArrowUp');
    }
    await page.waitForTimeout(4000);
    })
    // //* type("string")
    // //*insertText("")
     // //*press("a+b+c")press(<key>)
     //down(<key) and up(<key>)
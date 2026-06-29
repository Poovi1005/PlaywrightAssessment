import {test,chromium, expect} from "@playwright/test";

// test.use({
//     viewport : {height :1366,width :768}

// })
//  test("Assessment",async({page})=>{
//    await page.goto("https://www.amazon.in/s?k=join+amazon+prime&adgrpid=1327112148528381&hvadid=82944841893797&hvbmt=bb&hvdev=c&hvlocphy=154826&hvnetw=o&hvqmt=b&hvtargid=kwd-82945393014646%3Aloc-90&hydadcr=5626_2501648&mcid=3861a9d242543041b997efa1f39279d3&msclkid=e0a0aa84060818a37d9ec0bb62238584&tag=msndeskstdin-21&ref=pd_sl_9ntprzamt3_b");
//    await page.waitForTimeout(3000);
//     // await page.locator('[id="nav-search-submit-button"]').click();
//    await page.locator('[placeholder="Search Amazon.in"]').fill('Laptops');
//     await page.waitForTimeout(3000);
//    await page.locator('[id="nav-search-submit-button"]').click();
//     await page.waitForTimeout(3000);
//     await page.goBack();
   
//     let a= await page.locator('[placeholder="Search Amazon.in"]').inputValue();
//     expect(a).toBe('Laptops')


//     // ----------error not in login page ------------



//  })
//  ----------------------------------Passed1-------------------






// test.use({
//     viewport : {height :1366,width :780}

   
// });
// test("demoshop",async({page})=>{


// await page.goto("https://demowebshop.tricentis.com/");
// await page.locator(`//ul[@class="top-menu"]/li[5]`).click();
// await page.waitForTimeout(3000);
// await page.locator(`(//h2[@class="product-title"])[2]`).click();
// await page.waitForTimeout(3000);
// await page.locator(`(//input[@value="Add to cart"])[1]`).click();
// await page.waitForTimeout(3000);
// let a=await page.locator(`//span[@class="cart-qty"]`).textContent();
// expect(a).toBe("(1)")
// await page.locator(`//span[text()="Shopping cart"]`).click();
// await page.waitForTimeout(3000);
// await page.locator(`//input[@value="1"]`).click();
// await page.keyboard.press("Control+A");
// await page.keyboard.press("Control+x");
// await page.locator(`//input[@value="1"]`).click()
// await page.keyboard.type("3");
// await page.keyboard.press("Enter")
// await page.waitForTimeout(3000);
// let b=await page.locator(`//span[@class="product-subtotal"]`).textContent();
// expect(b).toBe("30.00");

// -------------------------------2passed-----------------------------------------
// })




// test("Blinkit",async({page})=>{
//     await page.goto("https://blinkit.com/");
//     await page.waitForTimeout(2000);
//     await page.locator('[class="btn location-box mask-button"]').click();
//         await page.waitForTimeout(2000);

//      await page.locator('[class="SearchBar__AnimationWrapper-sc-16lps2d-1 iJnYYS"]').click();
//          await page.waitForTimeout(2000);

//      await  page.locator('[placeholder="Search for atta dal and more"]').fill('Chocolates');
//          await page.waitForTimeout(2000);

//      let a = await page.locator('[placeholder="Search for atta dal and more"]').inputValue()
//          await page.waitForTimeout(2000);
//          expect(a).toBe('Chocolates');
//          await page.keyboard.press('Control+A');
//          await page.waitForTimeout(2000);
//           await page.keyboard.press('Control+X');
//           await page.waitForTimeout(2000);
//           let b = await page.locator('[placeholder="Search for atta dal and more"]').inputValue()
//            expect(b).toBe('');
//            await  page.locator('[placeholder="Search for atta dal and more"]').fill('Juice');
//          await page.waitForTimeout(2000);
//          await page.locator('[placeholder="Search for atta dal and more"]').screenshot({path:`Screenshot/${Date.now()}.png`});
//          await page.waitForTimeout(2000);
//          let c= await page.locator('[placeholder="Search for atta dal and more"]').inputValue();
//          expect(c).toBe('Juice');
// })
// ------------------------------------------3-passed-------------------------------------



// test("Blinkit2",async({page})=>{
//     await page.goto("https://blinkit.com/");
//     await page.waitForTimeout(2000);
//     await page.locator('[class="btn location-box mask-button"]').click();
//         await page.waitForTimeout(2000);

//      await page.locator('[class="SearchBar__AnimationWrapper-sc-16lps2d-1 iJnYYS"]').click();
//          await page.waitForTimeout(2000);

//      await  page.locator('[placeholder="Search for atta dal and more"]').fill('Pancake');
//          await page.waitForTimeout(2000);
//          await page.keyboard.press('Control+A');
//          await page.waitForTimeout(2000);
//           await page.keyboard.press('Control+X');
//           await page.waitForTimeout(2000);
//           let d = await page.locator('[placeholder="Search for atta dal and more"]').inputValue()
//             expect(d).toBe('');
//               await page.keyboard.press('Control+V');
             

//              await page.locator('[placeholder="Search for atta dal and more"]').screenshot({path:`Screenshot/${Date.now()}.png`});
//          await page.waitForTimeout(2000);
//           let e = await page.locator('[placeholder="Search for atta dal and more"]').inputValue()
//          expect(e).toBe('Pancake');
//          await page.keyboard.press("Enter");
//          await page.locator('//*[@id="443388"]/div[2]/div[2]/div[2]/div[2]/div').click();
//          await page.waitForTimeout(2000);
//                await page.locator('//*[@id="532656"]/div[3]/div[2]/div[2]/div[2]/div').click();
//                await page.waitForTimeout(2000);
//                let cart=await page.locator('(//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"])[2]').textContent();

//                expect(cart).toBe(" ₹305");
//                await page.waitForTimeout(2000);

//                if(cart<=" ₹305"){
//                 console.log("the total cost is====== "+cart)
//                }
//                else{
//                 console.log(("Not Valid"));
                
//                }






// })


// --------------------------------------------------------------4-passed-----------------------------------------------






// test('SauceDemo Validation and Add Fleece Jacket', async ({ page }) => {

    
//     await page.goto('https://www.saucedemo.com/');

    
    

//     await page.locator('#login-button').click();
//     await page.waitForTimeout(2000);
//     await page.locator('[class="error-message-container error"]').screenshot({path:`Screenshot/${Date.now()}.png`});

    
//     let errorMsg = page.locator('[data-test="error"]');
//     await expect(errorMsg).toBeVisible();
//     await page.waitForTimeout(2000);

    
//     let errorText = await errorMsg.textContent();
//     console.log('Error Message:', errorText);
//     await page.waitForTimeout(2000);

    
//     expect(errorText.length).toBeGreaterThan(5);
//     await expect(errorMsg).toContainText('Username is required');
//     await page.waitForTimeout(2000);

//     await page.locator('#user-name').fill('standard_user');
//     await page.locator('#password').fill('secret_sauce');

//     await page.locator('#login-button').click();


//     await expect(page).toHaveURL(/inventory/);
//     await page.waitForTimeout(2000);

//     await page
//         .locator('.inventory_item_name', {
//             hasText: 'Sauce Labs Fleece Jacket'
//         })
//         .locator('xpath=ancestor::div[@class="inventory_item"]')
//         .getByRole('button', { name: 'Add to cart' })
//         .click();
//         await page.waitForTimeout(2000);

    
//     await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
//     await page.waitForTimeout(2000);

// });
// ------------------------------------5-Passsed_________________________--

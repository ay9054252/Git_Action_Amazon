import { expect } from '@playwright/test';
import { test } from '../Fixture/BaseFixture'
import commonData from '../TestData/CommonData.json'
import testData from '../TestData/Data.json'
import { CartPage } from '../Pages/CartPage';


test.beforeEach(async ({ page, commonPage }) => {
    await commonPage.HitURl(commonData.HitUrl.Url);
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle("Amazon.com. Spend less. Smile more.");
    if (await commonPage.clickOnContinueShopping.isVisible()) {
        await commonPage.clickOnContinueShoppingBtn();
    }
    await commonPage.ClickOnSingInIcon();
    await commonPage.enterEmailID(commonData.Login.emailID);
    await commonPage.clickOnCounty();
    await commonPage.enterPassword(commonData.Login.password);
    await commonPage.clickOnSingIn();
}
)


// test("verify Amazon ", async ({ page, homePage, searchResultPage, cartPage, checkoutPage, productPage }) => {

//     await homePage.SearchBox(testData.Search.searched);
//     await expect(homePage.SearchedProduct).toBeVisible();
//     await homePage.clickOnSearchedProduct();
//     await page.waitForTimeout(4000);
//     await searchResultPage.clickOnProduct();
//     await expect(productPage.addToCart).toBeVisible();
//     await productPage.clickOnAddToCart();

//     await cartPage.clickOnproceedBtn();
//     await page.waitForTimeout(4000);
//     await expect(checkoutPage.newDeliveryAddress).toBeVisible();

//     await checkoutPage.clickOnNewDeliveryAddress();
//     await page.waitForTimeout(3000);
//     await checkoutPage.clickOnSelectCountry(testData.DeliveryAddress.country);
//     await page.waitForTimeout(3000);
//     await checkoutPage.enterFullName(testData.DeliveryAddress.fullName);
//     await checkoutPage.enterAddress(testData.DeliveryAddress.address);
//     await checkoutPage.enterLandMark(testData.DeliveryAddress.LandMark);
//     await checkoutPage.enterCityName(testData.DeliveryAddress.City);
//     await checkoutPage.enterStateName(testData.DeliveryAddress.StateName);
//     await checkoutPage.enterZipCode(testData.DeliveryAddress.ZipCode);
//     await checkoutPage.enterPhoneNumber(testData.DeliveryAddress.PhoneNumber);

// });

test("Scenario 02 Product Validation ", async ({ page, commonPage, cartPage }) => {
    await commonPage.clickOnAddProductToTheCart();
    await expect(cartPage.beforQty).toBeVisible();
    await cartPage.clickOnPluseBtn();
    await page.waitForTimeout(4000);

    await expect(cartPage.afterQty).toBeVisible();
    await cartPage.clickOnDeleteBtn();




})
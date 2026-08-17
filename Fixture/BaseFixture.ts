import { test as base } from '@playwright/test'
import { HomePage } from '../Pages/HomePage';
import { CommonPage } from '../Pages/CommonPage';
import { searchResultPage } from '../Pages/SearchResultPage';
import { CartPage } from '../Pages/CartPage';
import { CheckoutPagePage } from '../Pages/CheckoutPage';
import { ProductPage } from '../Pages/ProductPage';

type pageFixtures = {

    commonPage: CommonPage;
    homePage: HomePage;
    searchResultPage: searchResultPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPagePage;
    productPage: ProductPage;
}

export const test = base.extend<pageFixtures>({
    commonPage: async ({ page }, use) => {
        let commonpage: CommonPage = new CommonPage(page);
        await use(commonpage);
    },

    homePage: async ({ page }, use) => {
        let homePage: HomePage = new HomePage(page);
        await use(homePage);

    },
    searchResultPage: async ({ page }, use) => {
        let searchResultObj: searchResultPage = new searchResultPage(page);
        await use(searchResultObj);

    },
    cartPage: async ({ page }, use) => {
        let cartPage: CartPage = new CartPage(page);
        await use(cartPage);

    },
    checkoutPage: async ({ page }, use) => {
        let checkoutPagePage: CheckoutPagePage = new CheckoutPagePage(page);
        await use(checkoutPagePage);

    },
    productPage: async ({ page }, use) => {
        let productPage: ProductPage = new ProductPage(page);
        await use(productPage);
    }

})
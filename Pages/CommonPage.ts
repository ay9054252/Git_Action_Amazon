import { Page, Locator } from "@playwright/test";
import { UtilityMethod } from "./UtilityLayer/Utility";


export class CommonPage extends UtilityMethod {

    readonly accountIcon: Locator;
    readonly enterEmail: Locator;
    readonly countyBTN: Locator;
    readonly clickOnContinueShopping: Locator;
    readonly password:Locator;
    readonly SingIn:Locator;
    readonly AddProductToTheCart: Locator;

    constructor(page: Page) {
        super(page);
        this.accountIcon = page.locator("//div[@id='nav-link-accountList']");
        this.enterEmail = page.locator("//input[@id='ap_email_login']");
        this.countyBTN = page.locator("//input[@class='a-button-input']");
        this.clickOnContinueShopping = page.locator("//button[@class='a-button-text']");
        this.password=page.locator("//input[@id='ap_password']");
        this.SingIn=page.locator("//input[@id='signInSubmit']");

        this.AddProductToTheCart = page.locator("//a[@href='/gp/cart/view.html?ref_=nav_cart']");

    }

    async HitURl(URL: string) {
        await this.hitURl(URL);
    };

    async clickOnContinueShoppingBtn() {
        await this.click(this.clickOnContinueShopping);
    }

    async ClickOnSingInIcon() {
        await this.click(this.accountIcon);
    };

    async enterEmailID(emailId: string) {
        await this.setValue(this.enterEmail, emailId);
    };

    async clickOnCounty() {
        await this.click(this.countyBTN);
    }

    async enterPassword(password: string) {
        await this.setValue(this.password, password);
    };

    async clickOnSingIn() {
        await this.click(this.SingIn);
    };
    async clickOnAddProductToTheCart() {
        await this.click(this.AddProductToTheCart);
    }
}
import { Locator, Page } from "@playwright/test";
import { UtilityMethod } from "./UtilityLayer/Utility";

export class ProductPage extends UtilityMethod {

    readonly addToCart: Locator;

constructor(page:Page){
    super(page);
        this.addToCart = page.locator("//input[@id='add-to-cart-button']");

}

async clickOnAddToCart() {
        await this.click(this.addToCart);
    };
}
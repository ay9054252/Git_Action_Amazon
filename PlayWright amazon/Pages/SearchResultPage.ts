import { Locator, Page } from "@playwright/test";
import { UtilityMethod } from "./UtilityLayer/Utility";


export class searchResultPage extends UtilityMethod {

    readonly product: Locator

    constructor(page: Page) {
        super(page);

        this.product = page.locator("//div[@class='a-section a-spacing-small a-spacing-top-small']//span[contains(text(),'peaker with Bass, 20H Playtime, IPX6 Waterproof, Large Jobsite Speakers for Work, Outdoor, Workshop, Garage, Portable Speaker ')]");
    }

    
    
    async clickOnProduct(){
    await this.click(this.product);
    }

}
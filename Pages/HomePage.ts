import { Locator, Page } from '@playwright/test'
import { UtilityMethod } from './UtilityLayer/Utility';

export class HomePage extends UtilityMethod {

    readonly searchBox: Locator;
    readonly SearchedProduct: Locator;
    // readonly opportunitiesLink: Locator;
    // readonly contactLink: Locator
    // readonly afterscrollinglastElement: Locator;
    constructor(page: Page) {
        super(page);
        this.searchBox = page.locator("//input[@id='twotabsearchtextbox']");
        this.SearchedProduct = page.locator("//div[@aria-label='boat speaker waterproof']");

        // this.opportunitiesLink = page.locator("//a[@href='index.php?module=Potentials&action=index']");
        // this.contactLink = page.locator("//a[@href='index.php?module=Contacts&action=index']");
        // this.afterscrollinglastElement = page.locator("//b[contains(text(),'Top Organizations')]");
    }

    async SearchBox(search:string) {
        await this.setValue(this.searchBox,search)
    };


    async clickOnSearchedProduct() {
        await this.click(this.SearchedProduct);
    }
    // async clickOnOpportunitiesModuel() {
    //     await this.click(this.opportunitiesLink);
    // }
    // async clickOnContactModule() {
    //     await this.click(this.contactLink);
    // }
    // async takeSceenShortHomePage() {
    //     await this.takePageScreenshot("");
    // }
    // async lastVisibleElement(): Promise<string> {
    //     return await this.getVisibleText(this.afterscrollinglastElement);
    // }
    // async scrollToContactsModule() {
    //     return await this.scrollToElement(this.contactLink)
    // }

}
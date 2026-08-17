import { Locator, Page } from "@playwright/test";
import { UtilityMethod } from "./UtilityLayer/Utility";


export class CheckoutPagePage extends UtilityMethod {
    readonly newDeliveryAddress: Locator
    readonly selectCountry: Locator;
    readonly fullName: Locator;
    readonly phoneNumber: Locator;
    readonly address: Locator;
    readonly landMark: Locator;
    readonly city: Locator;
    readonly state:Locator;
    readonly ZipCode:Locator;
    readonly useAdd:Locator;

    constructor(page: Page) {
        super(page);
        this.newDeliveryAddress = page.locator("//a[contains(text(),'Add a new delivery address')]");
        this.selectCountry = page.locator("//select[@name='address-ui-widgets-countryCode']");
        this.fullName = page.locator("//input[@name='address-ui-widgets-enterAddressFullName']");
        this.phoneNumber = page.locator("//input[@name='address-ui-widgets-enterAddressPhoneNumber']");
        this.address = page.locator("//input[@name='address-ui-widgets-enterAddressLine1']");
        this.landMark = page.locator("//input[@name='address-ui-widgets-enterAddressLine2']")
        this.city = page.locator("//input[@name='address-ui-widgets-enterAddressCity']");
        this.state=page.locator("//input[@name='address-ui-widgets-enterAddressStateOrRegion']");
        this.ZipCode=page.locator("//input[@name='address-ui-widgets-enterAddressPostalCode']");
        this.useAdd=page.locator("//span[contains(text(),'Use this address')]");
    }


    async clickOnNewDeliveryAddress() {
        await this.click(this.newDeliveryAddress);
    }

    async clickOnSelectCountry(country: string) {
        await this.selectByLabel(this.selectCountry, country);
    }

    async enterFullName(fillFullName: string) {
        await this.setValue(this.fullName, fillFullName)
    }
    async enterPhoneNumber(fillPhoneNumber: string) {
        await this.setValue(this.phoneNumber, fillPhoneNumber)
    }
    async enterAddress(fillAddress: string) {
        await this.setValue(this.address, fillAddress)
    }
    async enterLandMark(fillunitOrSuiteNumber: string) {
        await this.setValue(this.landMark, fillunitOrSuiteNumber)
    }
    async enterCityName(fillCityName:string){
        await this.setValue(this.city,fillCityName);
    }
    async enterStateName(fillstateName:string){
        await this.setValue(this.state,fillstateName);
    }
    async enterZipCode(fillZipCode:string){
        await this.setValue(this.ZipCode,fillZipCode);
    }
    async clickOnUseAddress(){
        await this.click(this.useAdd);
    }
}
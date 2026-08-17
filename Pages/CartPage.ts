import { Locator, Page } from "@playwright/test";
import { UtilityMethod } from "./UtilityLayer/Utility";

export class CartPage extends UtilityMethod {
  readonly proceed: Locator
  readonly beforQty: Locator
  readonly pluseBtn: Locator;
  readonly afterQty: Locator
  readonly deleteBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.proceed = page.locator("//input[@name='proceedToRetailCheckout']");
    this.beforQty = page.locator("//span[contains(text(),'Loud Speaker with Bass, 20H Playtime, IPX6 Waterproof, Large…')]/ancestor::div[@class='a-row sc-list-item sc-java-remote-feature']//div[@class='a-stepper-inner-container']//span[text()='2']");
    this.pluseBtn = page.locator("//span[contains(text(),'Loud Speaker with Bass, 20H Playtime, IPX6 Waterproof, Large…')]/ancestor::div[@class='a-row sc-list-item sc-java-remote-feature']//div[@class='a-stepper-inner-container']//span[@class='a-icon a-icon-small-add']");
    this.afterQty = page.locator("//span[contains(text(),'Loud Speaker with Bass, 20H Playtime, IPX6 Waterproof, Large…')]/ancestor::div[@class='a-row sc-list-item sc-java-remote-feature']//div[@class='a-stepper-inner-container']//span[text()='3']");
    this.deleteBtn = page.locator("//span[contains(text(),'Loud Speaker with Bass, 20H Playtime, IPX6 Waterproof, Large…')]/ancestor::div[@class='a-row sc-list-item sc-java-remote-feature']//div[@class='a-stepper-inner-container']//span[@class='a-icon a-icon-small-trash']")


  }
  async clickOnproceedBtn() {
    await this.click(this.proceed);
  }
  async clickOnPluseBtn() {
    await this.click(this.pluseBtn);
  };
  async clickOnDeleteBtn() {
    await this.click(this.deleteBtn);
  }
}
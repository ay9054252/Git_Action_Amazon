import { Download, FileChooser, Locator, Page } from '@playwright/test';
import { promises } from 'node:dns';
import { url } from 'node:inspector';

export class UtilityMethod {

  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  // =====================<CLICK ACTIONS>=====================

  /**
  * This method is used to perform a normal click on a web element.
  *
  * @param element - Locator of the element to be clicked.
  * @returns Nothing.
  */
  async click(element: Locator): Promise<void> {
    await element.click();
  }

  /**
  * This method is used to perform a double click on a web element.
  *
  * @param element - Locator of the element to be double clicked.
  * @returns Nothing.
  */
  async doubleClick(element: Locator): Promise<void> {
    await element.dblclick();
  }

  /**
 * This method is used to perform a right click on a web element.
 *
 * @param element - Locator of the element to be right clicked.
 * @returns Nothing.
 */
  async rightClick(element: Locator): Promise<void> {
    await element.click({ button: 'right' });
  }

  /**
* This method is used to perform a force click on a web element.
*
* @param element - Locator of the element to be clicked.
* @returns Nothing.
*/
  async forceClick(element: Locator): Promise<void> {
    await element.click({ force: true });
  }

  //Ckick Element By Index
  async clickByIndex(element: Locator, index: number) {
    await element.nth(index).click();
  }


  //=====================<TEXTBOX ACTIONS>=====================

  /**
 * This method is used to enter text into a web element.
 *
 * @param element - Locator of the input element.
 * @param text - Text to be entered.
 * @returns Nothing.
 */
  async setValue(element: Locator, value: string): Promise<void> {
    await element.fill(value);
  }

  /**
 * This method is used to enter Text into a web element by Sequentially
 *
 * @param element - Locator of the input element.
 * @param text - Text to be entered.
 * @returns Nothing.
 */
  async typeValue(element: Locator, value: string): Promise<void> {
    await element.pressSequentially(value);
  }

  /**
 * This method is used to clear the text from a web element.
 *
 * @param element - Locator of the input element.
 * @returns Nothing.
 */
  async clearValue(element: Locator): Promise<void> {
    await element.clear();
  }

  //=====================<KEYBOARD ACTIONS>=====================
  /**
 * This method is used to press a key on a web element.
 *
 * @param element - Locator of the target element.
 * @param key - Key to be pressed.
 * @returns Nothing.
 */
  async press(element: Locator, key: string): Promise<void> {
    await element.press(key);
  }

  /**
 * This method is used to press the Enter key on a web element.
 *
 * @param element - Locator of the target element.
 * @returns Nothing.
 */
  async pressEnter(element: Locator): Promise<void> {
    await element.press('Enter');
  }

  /**
 * This method is used to press the Tab key on a web element.
 *
 * @param element - Locator of the target element.
 * @returns Nothing.
 */
  async pressTab(element: Locator): Promise<void> {
    await element.press('Tab');
  }

  //=====================<ELEMENT INFO>=====================

  /**
 * This method is used to get the visible text from a web element.
 *
 * @param element - Locator of the target element.
 * @returns Visible text of the element.
 */
  async getVisibleText(element: Locator): Promise<string> {
    return await element.innerText();
  }

  /**
 * This method is used to get the text content from a web element.
 *
 * @param element - Locator of the target element.
 * @returns Text content of the element.
 */
  async getText(element: Locator): Promise<string | null> {
    return await element.textContent();
  }
  /**
 * This method is used to get text from all matching elements.
 *
 * @param element - Locator of the target elements.
 * @returns List of text values.
 */
  async getAllTexts(element: Locator): Promise<string[]> {
    return await element.allTextContents();
  }
  /**
 * This method is used to get the value of an input or dropdown element.
 *
 * @param element - Locator of the target element.
 * @returns Value of the element.
 */
  async getInputValue(element: Locator): Promise<string> {
    return await element.inputValue();
  }

  /**
 * This method is used to get the attribute value of a web element.
 *
 * @param element - Locator of the target element.
 * @param attribute - Name of the attribute.
 * @returns Attribute value.
 */
  async getAttribute(element: Locator, attribute: string): Promise<string | null> {
    return await element.getAttribute(attribute);
  }

  /**
 * This method is used to count all matching web elements.
 *
 * @param element - Locator of the target elements.
 * @returns Number of elements found.
 */
  async getElementsCount(element: Locator): Promise<number> {
    return await element.count();
  }

  //===========================<DROPDOWN>============================

  /**
 * This method is used to select a dropdown option by value.
 *
 * @param element - Locator of the dropdown element.
 * @param value - Value to be selected.
 * @returns Nothing.
 */
  async selectByValue(element: Locator, value: string) {
    await element.selectOption({ value: value });
  }

  /**
 * This method is used to select a dropdown option by label.
 *
 * @param element - Locator of the dropdown element.
 * @param labelValue - Label to be selected.
 * @returns Nothing.
 */
  async selectByLabel(element: Locator, labelValue: string) {
    await element.selectOption({ label: labelValue });
  }

  /**
 * This method is used to select a dropdown option by index.
 *
 * @param element - Locator of the dropdown element.
 * @param indexNumber - Index of the option to be selected.
 * @returns Nothing.
 */
  async selectByIndex(element: Locator, indexNumber: number) {
    await element.selectOption({ index: indexNumber });
  }

  //======================<CHECKBOX & RADIO>======================

  /**
 * This method is used to check a checkbox element.
 *
 * @param element - Locator of the checkbox element.
 * @returns Nothing.
 */
  async check(element: Locator) {
    await element.check();
  }

  /**
 * This method is used to uncheck a checkbox element.
 *
 * @param element - Locator of the checkbox element.
 * @returns Nothing.
 */
  async uncheck(element: Locator) {
    await element.uncheck();
  }

  //=========================<MOUSE ACTION>=====================

  /**
  * This method is used to hover on any hoverable  web element.
  *
  * @param element - Locator of the target element.
  * @returns Nothing.
  */
  async mouseOver(element: Locator) {
    await element.hover();
  }

  // Drag and Drop
  async dragAndDrop(source: string, target: string): Promise<void> {
    await this.page.locator(source).dragTo(this.page.locator(target));

  }

  //=========================<WINDOWS / TAB>======================
  /**
   * This method is used to get all open browser pages.
   *
   * @returns List of browser pages.
   */
  async getAllPages() {
    return this.page.context().pages();
  }
  /**
   * This method is used to get the count of open browser tabs.
   *
   * @returns Number of open tabs.
   */
  async getPageCount(): Promise<number> {
    return this.page.context().pages().length;
  }
  /**
   * This method is used to switch to open browser tab by index.
   *
   * @param index - Index of the tab.
   * @returns Page object of the selected tab.
   */
  async switchToTabByIndex(index: number) {
    const pages = this.page.context().pages();
    return pages[index];
  }

  async switchToTabByURL(pageUrl: string): Promise<Page> {
    const pages = this.page.context().pages();
    for (const tabes of pages) {
      if (tabes.url().includes(pageUrl)) {
        await tabes.bringToFront();
        return tabes;
      }
    }
    throw new Error("Page not Found");
  }

  async switchToTabByTitle(pageUrl: string) {
    const pages = this.page.context().pages();
    for (const tabes of pages) {
      if ((await tabes.title()).includes(pageUrl)) {
        await tabes.bringToFront();
        break;
      }
    }
    throw new Error("Page not Found");
  }


  /**
   * This method is used to get the latest opened browser tab.
   *
   * @returns Latest browser page.
   */
  async getLatestTab() {
    const pages = this.page.context().pages();
    return pages[pages.length - 1];
  }
  /**
   * This method is used to close the current browser tab.
   *
   * @returns Nothing.
   */
  async closeCurrentTab(): Promise<void> {
    await this.page.close();
  }

  //=========================<ALERTS>=======================

  async acceptAlert(): Promise<void> {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
  }

  async dismissAlert(): Promise<void> {
    this.page.once('dialog', async dialog => {
      await dialog.dismiss();
    });
  }

  async acceptPrompt(text: string): Promise<void> {
    this.page.once('dialog', async dialog => {
      await dialog.accept(text);
    });
  }

  //==========================<SCROLLING>========================

  async scrollToElement(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
  }

  async scrollBy(x: number, y: number): Promise<void> {
    await this.page.evaluate(
      ({ x, y }) => window.scrollBy(x, y),
      { x, y }
    );
  }

  //==========================<BROWSER METHODS>========================
  // Navigate URL
  async hitURl(url: string) {
    await this.page.goto(url);
  }

  // Refresh Page
  async refreshPage() {
    await this.page.reload();
  }

  // Go Back
  async goBack() {
    await this.page.goBack();
  }

  // Go Forward
  async goForward() {
    await this.page.goForward();
  }
  // Get Page Title
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  // Get Current URL
  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }
  //=======================<SCREENSHORT>=======================
  // Screenshot
  async takeElementScreenshot(element: Locator, path: string) {
    await element.screenshot({ path: path });
  }

  // Take Page Screenshot
  async takePageScreenshot(path: string) {
    await this.page.screenshot({ path, fullPage: true });
  }

  //=======================<Upload File>===============================
  /*
  Upload single File...
  
  */

  async uploadFile(element: Locator, filePath: string) {
    await element.setInputFiles(filePath);

  }
  /*
  Upload Multiple File...
  
  */
  async uploadMultipleFile(element: Locator, filePath: string[]) {
    await element.setInputFiles(filePath);
  }

  async clickAndUploadFile(element: Locator, filePath: string) {
    let waitforFileSelect: Promise<FileChooser> = this.page.waitForEvent("filechooser");
    await element.click();
    let filechooser: FileChooser = await waitforFileSelect;
    await filechooser.setFiles(filePath);

  }

  //=======================<Donwload File>===============================

  async clickAndDownloadFile(element: Locator, path: string) {
    let waitDownloadFile: Promise<Download> = this.page.waitForEvent("download");
    await element.click();
    let download: Download = await waitDownloadFile;
    await download.saveAs(path);

  }
  //=========================<Waiting Method>======================

  async waitForElementVisibilty(element: Locator) {
    await element.waitFor({ state: "visible" });

  }
  async waitForElementInvisibilty(element: Locator) {
    await element.waitFor({ state: "hidden" })
  }

  async waitForElement(xpath: string) {
    await this.page.waitForSelector(xpath);

  }
  async waitForPageLoad() {
    await this.page.waitForLoadState();
  }

  async waitForPopup(element: Locator): Promise<Page> {
    let waitForPopupWindow = this.page.waitForEvent("popup");
    element.click();
    let popup = await waitForPopupWindow;
    return popup;
  }

}
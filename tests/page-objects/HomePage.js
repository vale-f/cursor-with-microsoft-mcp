const { expect } = require('@playwright/test');

class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.languageIcon = 'img[alt="Language"].max-w-none';
    this.englishLink = 'a[href="/en/"]';
    this.spanishLink = 'a[href="/es/"]';
    this.spanishHeading = /Estamos construyendo un mundo abierto por diseño/;
    this.englishHeading = /We are building a world open by design where all knowledge is/;
  }

  async goto(language = 'es') {
    await this.page.goto(`/${language}/`);
  }

  async switchToEnglish() {
    await this.page.hover(this.languageIcon);
    await this.page.locator(this.englishLink).click({ waitFor: 'load' });
  }

  async switchToSpanish() {
    await this.page.hover(this.languageIcon);
    await this.page.locator(this.spanishLink).click({ waitFor: 'load' });
  }

  async expectSpanishHeading() {
    await expect(this.page.getByRole('heading', { name: this.spanishHeading })).toBeVisible();
  }

  async expectEnglishHeading() {
    await expect(this.page.getByRole('heading', { name: this.englishHeading })).toBeVisible();
  }
}

module.exports = { HomePage }; 
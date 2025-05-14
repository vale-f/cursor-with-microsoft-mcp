const { test, expect } = require('@playwright/test');
const { HomePage } = require('./page-objects/HomePage');

test('User can search for terms using the blog search bar', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step('Go to the homepage', async () => {
      await page.goto('en');
    });
  
    await test.step('Go to the blog', async () => {
        await homePage.goToBlog();
      });
      await test.step('Search for a term', async () => {
        const searchInput = page.locator('li#search-3 .search-form input[type="text"].search-bar_input[name="s"]');
        await searchInput.click();
        await searchInput.fill('open data');
        await page.locator('li#search-3 button[type="submit"].search-bar_button').click({ waitFor: 'load' });
      });
      //await test.step('Verify that the term is present in the first five results', async () => {
        //
      //});
  });
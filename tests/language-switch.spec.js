const { test, expect } = require('@playwright/test');

test('Language switch from Spanish to English', async ({ page }) => {
  // Go to the Spanish homepage
  await page.goto('https://okfn.org/es/');

  // Verify the Spanish heading is present
  await expect(
    page.getByRole('heading', { name: /Estamos construyendo un mundo abierto por diseño/ })
  ).toBeVisible();

  // Hover over the menu or language icon to reveal the "English" link
  await page.hover('img[alt="Language"].max-w-none');

  // Now click the "English" link
  await page.click('a[href="/en/"]');

  // Verify the English heading is present
  await expect(
    page.getByRole('heading', { name: /We are building a world open by design where all knowledge is/ })
  ).toBeVisible();
});
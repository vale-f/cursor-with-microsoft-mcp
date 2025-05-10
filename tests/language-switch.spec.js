const { test, expect } = require('@playwright/test');

test('Language switch from Spanish to English', async ({ page }) => {
  // Go to the Spanish homepage
  await page.goto('/es/');

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

test('Language switch from English to Spanish', async ({ page }) => {
  // Go to the English homepage
  await page.goto('/en/');

  // Verify the English heading is present
  await expect(
    page.getByRole('heading', { name: /We are building a world open by design where all knowledge is/ })
  ).toBeVisible();

  // Hover over the menu or language icon to reveal the "Spanish" link
  await page.hover('img[alt="Language"].max-w-none');

  // Now click the "Spanish" link
  await page.click('a[href="/es/"]');

  // Verify the Spanish heading is present
  await expect(
    page.getByRole('heading', { name: /Estamos construyendo un mundo abierto por diseño/ })
  ).toBeVisible();
});
const { test, expect } = require('@playwright/test');

test('Language switch from Spanish to English', async ({ page }) => {
  await test.step('Go to the Spanish homepage', async () => {
    await page.goto('/es/');
  });

  await test.step('Verify the Spanish heading is present', async () => {
    await expect(
      page.getByRole('heading', { name: /Estamos construyendo un mundo abierto por diseño/ })
    ).toBeVisible();
  });

  await test.step('Hover over the language icon to reveal the English link', async () => {
    await page.hover('img[alt="Language"].max-w-none');
  });

  await test.step('Click the English link', async () => {
    await page.click('a[href="/en/"]');
  });

  await test.step('Verify the English heading is present', async () => {
    await expect(
      page.getByRole('heading', { name: /We are building a world open by design where all knowledge is/ })
    ).toBeVisible();
  });
});

test('Language switch from English to Spanish', async ({ page }) => {
  await test.step('Go to the English homepage', async () => {
    await page.goto('/en/');
  });

  await test.step('Verify the English heading is present', async () => {
    await expect(
      page.getByRole('heading', { name: /We are building a world open by design where all knowledge is/ })
    ).toBeVisible();
  });

  await test.step('Hover over the language icon to reveal the Spanish link', async () => {
    await page.hover('img[alt="Language"].max-w-none');
  });

  await test.step('Click the Spanish link', async () => {
    await page.click('a[href="/es/"]');
  });

  await test.step('Verify the Spanish heading is present', async () => {
    await expect(
      page.getByRole('heading', { name: /Estamos construyendo un mundo abierto por diseño/ })
    ).toBeVisible();
  });
});
const { test, expect } = require('@playwright/test');
const { HomePage } = require('./page-objects/HomePage');

test('Language switch from Spanish to English', async ({ page }) => {
  const homePage = new HomePage(page);

  await test.step('Go to the Spanish homepage', async () => {
    await homePage.goto('es');
  });

  await test.step('Verify the Spanish heading is present', async () => {
    await homePage.expectSpanishHeading();
  });

  await test.step('Switch to English', async () => {
    await homePage.switchToEnglish();
  });

  await test.step('Verify the English heading is present', async () => {
    await homePage.expectEnglishHeading();
  });
});

test('Language switch from English to Spanish', async ({ page }) => {
  const homePage = new HomePage(page);

  await test.step('Go to the English homepage', async () => {
    await homePage.goto('en');
  });

  await test.step('Verify the English heading is present', async () => {
    await homePage.expectEnglishHeading();
  });

  await test.step('Switch to Spanish', async () => {
    await homePage.switchToSpanish();
  });

  await test.step('Verify the Spanish heading is present', async () => {
    await homePage.expectSpanishHeading();
  });
});
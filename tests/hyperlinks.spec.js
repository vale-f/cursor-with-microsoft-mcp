import { test, expect } from '@playwright/test';

test('Social media icons point to correct URLs', async ({ page }) => {
  await test.step('Go to the homepage', async () => {
    await page.goto('/');
  });

  await test.step('Check LinkedIn icon points to correct URL', async () => {
    const linkedinHref = await page.getAttribute('a[href="https://www.linkedin.com/company/open-knowledge-foundation/"]', 'href');
    expect(linkedinHref).toBe('https://www.linkedin.com/company/open-knowledge-foundation/');
  });

  await test.step('Check YouTube icon points to correct URL', async () => {
    const youtubeHref = await page.getAttribute('a[href="https://www.youtube.com/@OpenKnowledgeFoundation/videos"]', 'href');
    expect(youtubeHref).toBe('https://www.youtube.com/@OpenKnowledgeFoundation/videos');
  });

  await test.step('Check X icon points to correct URL', async () => {
    const xHref = await page.getAttribute('a[href="https://twitter.com/okfn"]', 'href');
    expect(xHref).toBe('https://twitter.com/okfn');
  });
});
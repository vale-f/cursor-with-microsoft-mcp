import { test, expect } from '@playwright/test';

test('Social media icons point to correct URLs', async ({ page }) => {
  await page.goto('/');

  // Linkedin
  const linkedinHref = await page.getAttribute('a[href="https://www.linkedin.com/company/open-knowledge-foundation/"]', 'href');
  expect(linkedinHref).toBe('https://www.linkedin.com/company/open-knowledge-foundation/');

  // YouTube
  const youtubeHref = await page.getAttribute('a[href="https://www.youtube.com/@OpenKnowledgeFoundation/videos"]', 'href');
  expect(youtubeHref).toBe('https://www.youtube.com/@OpenKnowledgeFoundation/videos');

  // X
  const xHref = await page.getAttribute('a[href="https://twitter.com/okfn"]', 'href');
  expect(xHref).toBe('https://twitter.com/okfn');
});
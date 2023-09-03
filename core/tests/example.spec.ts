import { test, expect } from '@playwright/test';

// scrape from google.com for the title of the page
test('basic test', async ({ page }) => {
  await page.goto('https://google.com');
  const title = await page.title();
  console.log('the title of the page is' + title);
});
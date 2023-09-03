import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // get title of the page
  const title = await page.title();
  console.log(title);
});

import { test, expect } from '@playwright/test';

test('Main', async ({ page }) => {
    await page.goto('https://google.com');
    // get entire page
    const pageContent = await page.content();
    console.log(pageContent);
});
import { test, expect } from '@playwright/test';

test('select placeholder', async ({ page }) => {
    await page.goto('https://google.com');
    // get entire page
    const pageContent = await page.content();
});
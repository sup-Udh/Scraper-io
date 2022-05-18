import {help} from './commands/help';
help();
// // get the number of pages limit to 5 pages then get the product name and price of each product
// for (let i = 1; i <= pages!; i++) {
//     await page.goto(`https://www.${searchTerm}.com/s?k=${SearthQuery}&page=${i}`);
//     await page.waitForTimeout(2000);
//     const productName = await page.evaluate(() => {
//         const productName = document.querySelectorAll('.a-color-base.a-text-normal');
//         return Array.from(productName).map(product => product.textContent);
//     });
//     const productPrice = await page.evaluate(() => {
//         const productPrice = document.querySelectorAll('.a-price-whole');
//         return Array.from(productPrice).map(product => product.textContent);
        
//     });
//     console.log(productName);
//     console.log(productPrice);
  
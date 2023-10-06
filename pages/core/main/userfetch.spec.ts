import {test , expect} from '@playwright/test';
const axios = require('axios')

test('has Element', async ({page}) => {
    await page.goto('https://playwright.dev/docs/intro')
    const pagecontent = await page.content()
    axios.post('http://localhost:3000/api/data', {
        page: pagecontent
    })
    .then(function (response: any) {
        console.log(response);
    })
    .catch(function (error: any) {
        console.log(error);
    })

 
})

import {test , expect} from '@playwright/test';
import { elements } from 'chart.js';
import { url } from 'inspector';
const axios = require('axios')

test('has Element', async ({page}) => {
    // get data from api
    const response = await axios.get('http://localhost:3000/api/test', {
        url: url,
        elements: elements
    })
    console.log(response.data)

})

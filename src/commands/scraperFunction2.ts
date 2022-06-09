import puppeteer from 'puppeteer';

export  function ScraperFunction2(searchQuery: string){
    // scrape yt vid title, and comments 
    if(searchQuery === "youtube"){
        // intialize puppteer
        async function youtubeComments(){
        const browser = puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ['--start-maximized'],
        });
        // create a new page
        const page = await (await browser).newPage();
        // go to youtube
        await page.goto('https://www.youtube.com/');
        // wait for the page to load
        await page.waitForTimeout(2000);
        // type the search query
        await page.waitForTimeout(2000);
        await page.click('#search');
        await page.waitForTimeout(2000);
        await page.type('#search', 'Hello world', {delay: 100});


    }
    youtubeComments();

        
    }
}
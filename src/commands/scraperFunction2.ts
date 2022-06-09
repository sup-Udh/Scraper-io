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
        await page.goto('https://www.youtube.com/watch?v=lXIb-1_H-mA');
        // wait for the page to load
        await page.waitForTimeout(2000);
        // wait for the comments to load
        await page.waitForSelector('#comments');
        // get only one comment
        const comment = await page.waitForSelector('#comments #content-text');
        // get all the comments
        const comments = await page.evaluate(() => {
            const comments = document.querySelectorAll('#comments #content-text');
            const commentText = Array.from(comments).map(comment => comment.textContent);
            return commentText;
        });
        console.log(comments);



    }
    youtubeComments();

        
    }
}
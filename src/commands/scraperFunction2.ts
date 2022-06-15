import { waitForDebugger } from "inspector";

const puppeteer = require('puppeteer');
export  async function scrapeFunction2(searchTerm : string, SearthQuery : string) { // searchTetrm => Site , Search => Query
    if(searchTerm === 'youtube'){


        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ['--start-maximized'],
        });


        const page = await browser.newPage();
        const url = `https://www.youtube.com/watch?v=${SearthQuery}`;
        // https://youtu.be/1X7I25-rSqE
        await page.goto(url);
        // wait for the page to load
        await page.waitForTimeout(2000);
    
        const autoScroll = async (page: { evaluate: (arg0: () => Promise<void>) => any; }) => {
            await page.evaluate(async () => {
              await new Promise<void>((resolve, reject) => {
                let totalHeight = 800;
                const distance = 800;
                const timer = setInterval(() => {
                  const scrollHeight = document.body.scrollHeight;
                  window.scrollBy(0, distance);
                  totalHeight += distance;
          
                  if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                  }
                }, 100);
              });
            });
          }
          
        await autoScroll(page);
        await page.waitForTimeout(2000);

        // console log the render time it took to give the resultsw

        const CommentCount = await page.evaluate(() => {

            const comments = Array.from(document.querySelectorAll('#comments .style-scope yt-formatted-string')).map(comment => comment.textContent);
            return comments;
        }
        );
        console.log(CommentCount);

        const comments = await page.evaluate(() => {
            // don't want array format of the comments
            
            const comments = Array.from(document.querySelectorAll('#comments #content-text')).map(comment => comment.textContent);
            return comments;
        }
        );
        console.log(comments);


    

 } 
}
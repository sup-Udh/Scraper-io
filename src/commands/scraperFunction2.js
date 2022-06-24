import { waitForDebugger } from "inspector";
const rdl = require("readline");
const puppeteer = require('puppeteer');
import { scraperFunction3 } from "./scraperFunction3";





export  async function scrapeFunction2(searchTerm ,SearthQuery ) { // searchTetrm => Site , Search => Query
    let chromiumExecutablePath = (isPkg ?
        puppeteer.executablePath().replace(
          /^.*?\/node_modules\/puppeteer\/\.local-chromium/,
          path.join(path.dirname(process.execPath), 'chromium')
        ) :
        puppeteer.executablePath()
      );
    if(searchTerm === 'youtube'){


        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ['--start-maximized'],
            executablePath: chromiumExecutablePaths,

        });


        const page = await browser.newPage();
        const url = `https://www.youtube.com/watch?v=${SearthQuery}`;
        // https://youtu.be/1X7I25-rSqE
        await page.goto(url);
        // wait for the page to load
        await page.waitForTimeout(2000);
    
        const autoScroll = async () => {
            await page.evaluate(async () => {
              await new Promise ((resolve, reject) => {
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
                }, 10);
              });
            });
          }

        await autoScroll(page);
        await page.waitForTimeout(2000);

        // #comments .style-scope yt-formatted-string
        const NumComments = await page.evaluate(() => {
            const comments = document.querySelector('#comments .style-scope yt-formatted-string');
            if(comments){
                return comments.textContent;
            } else {
                return 'No Comments';
            }
        }
        );

        const YoutubeTitle = await page.evaluate(() => {
          const title = document.querySelector('.style-scope ytd-video-primary-info-renderer');
          if(title){
              // if there are /n then use them as spaces
              return title.textContent.replace(/\n/g, ' ');
          }else{
              return 'No Title';
          }
        }
        );
        // description id = "description"

        const YoutubeDescription = await page.evaluate(() => {
            const description = document.querySelector('#description .content');
            if(description){
                return description.textContent;
            }
            else{
                return 'No Description';
            }
        }
        );

        const duration = await page.evaluate(() => {
            const duration = document.querySelector('.ytp-time-duration');
            if(duration){
                return duration.textContent;
            }
            else{
                return 'No Duration';
            }
        }
        );

        const comments = await page.evaluate(() => {   
          const commentText = Array.from(document.querySelectorAll('#comments #content-text')).map(comment => comment.textContent);
          return commentText;
      }
      );
      

        const finalData = {
            title: YoutubeTitle,
            numberofComments: NumComments,
            description: YoutubeDescription,
            duration: duration,
            commentsText: {
                comments
            }
        }
        console.log(finalData);



  


    

 }else{
  scraperFunction3();


 }
}
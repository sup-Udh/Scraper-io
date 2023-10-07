const cheerio = require('cheerio');
const fs = require('fs');
export default async function datahandler(req: any, res: any){
    if(req.method === "POST"){
        const body = req.body.page;
        const $ = cheerio.load(body);
        const title = await $('title').text();
        console.log(title);
    }

}
const axios = require('axios')
const cheerio = require('cheerio');
export default function handler(req :any, res:any){
    if(req.method === 'POST' && "GET" ){
        const  url = req.body.url;
        const elements = req.body.elements;
        // return in json format 
        return {
            url: url,
            elements: elements

        }

    }
}
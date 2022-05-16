let chalk = require('chalk');
let clear = require('clear');
let figlet = require('figlet');
let path = require('path');
let program = require('commander');
import { scrapeFunction1 } from "./scrapeFunction1";
export function help() {
program
  .version('0.0.1 --Pre-Alpha')
  .description("Scrpe Your Favorite websites in minutes!")
  
  .option('-s, --scrape ', 'Scrape Your Website')
  .option('-ds, --Defaultsites', 'Templates we have for you')
  .option('-h, --help', 'Help')
  .parse(process.argv);

const options = program.opts();
console.log(options);

if (options.scrape){
  // ask for search term
  let searchterm : any;
  searchterm = prompt("Please enter a search term");
  scrapeFunction1(searchterm);

}
if (options.ds) console.log('ds');
if(options.help) console.log("helping");

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

}
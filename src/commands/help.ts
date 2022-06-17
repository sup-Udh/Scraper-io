let chalk = require('chalk');
let clear = require('clear');
let figlet = require('figlet');
let path = require('path');
let program = require('commander');
import { scrapeFunction1 } from "./scrapeFunction1";
import { GoogleSearchResults } from "../externalCmds/googleSearchResults";
import { defaultSites } from "../externalCmds/defaultSites";
import { terminalhelp } from "../externalCmds/help";
const { prompt } = require('enquirer');

export async  function help() {



program
  .version('0.0.1 --Pre-Alpha')
  .description("Scrpe Your Favorite websites in minutes!")
  
  .option('-s, --scrape ', 'Scrape Your Website')
  .option('-ds, --Defaultsites', 'Templates we have for you')
  .option('-h, --help', 'Help')
  .option('-g, --google', 'google')

  .parse(process.argv);

const options = program.opts();
console.log(options);

if (options.scrape){
  // ask for search term
  const response = await prompt([
    {
      type: 'input',
      name: 'Site',
      message: 'Site You want to scrape?'
    },
    {
      type: 'input',
      name: 'Search',
      message: 'Your Search Query'
    }
  ]);
  console.log(response);
  scrapeFunction1(response.Site, response.Search);

}
if (options.ds){
  defaultSites();

}
if(options.help){
  terminalhelp();
}
if(options.google){
  GoogleSearchResults();

}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

}
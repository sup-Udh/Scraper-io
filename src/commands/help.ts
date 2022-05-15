let chalk = require('chalk');
let clear = require('clear');
let figlet = require('figlet');
let path = require('path');
let program = require('commander');

export function help() {

clear();
console.log(
  chalk.red(
    figlet.textSync('pizza-cli', { horizontalLayout: 'full' })
  )
);
}
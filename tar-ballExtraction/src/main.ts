import {help} from './commands/help';
let tar = require('tar');
help();

// testig tar here 
tar.c(
    {
      gzip: true,
      file: 'my-tarball.tgz'
    },
    ['./src']
  ).then((_: any) => { console.log('done') })



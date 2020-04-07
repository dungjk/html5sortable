const fs = require('fs-extra');
const package = require('./package.json');

fs
    .copy(package.main, './docs/html5sortable.js')
    .then(() =>{
        console.log('Copy succeed!');
    })
    .catch(() =>{
        console.log('Copy failed!');
    });

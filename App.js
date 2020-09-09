#! /usr/bin/env node

var { spawn } = require('child_process'),
    axios = require('axios');
    url = process.argv[2],
time = process.argv[3];
if (!time || !url) {
    console.log(`
    Invalid command.
    Usage: heroku-awaker <url> <time:minutes>  
  `);
}
else{
setInterval(
    function(){  
axios.get(url)
.then(function() {
  // handle success
  console.log('awaking');
})
.catch(function (error) {
  // handle error
  console.log(error);
})
}
,time*1000)
}
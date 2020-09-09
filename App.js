#! /usr/bin/env node 
//setting bash
// importing modules 
var { spawn } = require('child_process'),
    axios = require('axios');
    url = process.argv[2], //getting args
time = process.argv[3];
if (!time || !url) { // checking undifined args
    console.log(`
    Invalid command.
    Usage: heroku-awaker <url> <time:minutes>  
  `);
}
else{ //running this code
setInterval(
    function(){  
axios.get(url)//getting url
.then(function() {
  // handle success
  console.log(`awaking`);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
}
,time*1000)
}

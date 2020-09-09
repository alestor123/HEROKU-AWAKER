#! /usr/bin/env node 
//setting bash
// importing modules 
var { spawn } = require('child_process'),
    pjson = require('./package.json'),  
    axios = require('axios');
    url = process.argv[2], //getting args
time = process.argv[3];
if(url=='-i' || url=='--issue'){
  console.log( `report issues on this github issue page > ${pjson.bugs.url}`)
process.exit(1);
}
if(url=='-v' || url=='--version'){
  console.log( `${pjson.version}`)
process.exit(1);
}
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

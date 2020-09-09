#! /usr/bin/env node

var { spawn } = require('child_process'),
    axios = require('axios');
    url = process.argv[2],
    time = process.argv[3];
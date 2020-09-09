#! /usr/bin/env node

var { spawn } = require('child_process'),
    meow = require('meow'),
    url = process.argv[2],
    time = process.argv[3];
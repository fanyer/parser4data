#!/usr/bin/env node

const fs = require('fs')
const linkData = require('./link.config.js')
const antibioticsData = require('./estimate-antibiotics.config.js')


fs.writeFile('link.config.json', JSON.stringify(linkData), function(err, stdout, stderr) {
    if (err) {

        console.log('err:' + stderr);
    } else {

        console.log('stdout:' + stdout);
    }
})

fs.writeFile('estimate-antibiotics.config.json', JSON.stringify(antibioticsData), function(err, stdout, stderr) {
    if (err) {

        console.log('err:' + stderr);
    } else {

        console.log('stdout:' + stdout);
    }
})

#!/usr/bin/env node

const execSync = require('child_process').execSync;
// let cmdStr = 'cat parser4data.rollup.js | wc -l';
let cmdStr = 'ruby ../rb/link.parser.rb';


// exec(cmdStr, function(err, stdout, stderr) {
//     if (err) {

//         console.error('err:' + stderr);

//     } else {

//         // var data = JSON.parse(stdout);
//         // console.log('stdout:' + stdout);
//         output = stdout;
//         // output = JSON.parse(stdout);

//     }
// });

output=execSync(cmdStr);

module.exports=JSON.parse(output.toString())

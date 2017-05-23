#!/usr/bin/env node

/*   author:fanyer
 *   mail: iofanyer@gmail.com
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

const execSync = require('child_process').execSync;
// let cmdStr = 'cat parser4data.rollup.js | wc -l';
let cmdStr1 = 'ruby ../rb/link.parser.rb';
let cmdStr2 = 'ruby ../rb/antibiotics.parser.rb';
let cmdStr3 = 'ruby ../rb/index.rb';


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

// output = execSync(cmdStr1);
// output = execSync(cmdStr2);

output = execSync(cmdStr3);

module.exports = JSON.parse(output.toString())

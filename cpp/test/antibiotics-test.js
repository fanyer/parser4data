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
 
const test = require('tap').test,
    testRoot = require('path').resolve(__dirname, '..'),
    bindings = require('bindings')({
        module_root: testRoot,
        bindings: 'antibiotics'
    });

test('antibiotics', function(t) {
  t.plan();
  var r=bindings.parse;
  t.type(parse, 'function');
})

// var t = require('tap')

// t.test(function one (t) {
//   someSlowFunction(function () {
//     t.pass('one worked')
//     t.end()
//   })
// })

// t.test(function two (t) {
//   someSlowFunction(function () {
//     t.pass('two worked')
//     t.end()
//   })
// })

// t.test(function three (t) {
//   someSlowFunction(function () {
//     t.pass('three worked')
//     t.end()
//   })
// })
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
 
var dependencies = require("./package.json").dependencies;
var version = require('./package.json').version;
var babel = require('rollup-plugin-babel');

var banner =
    '/*!\n' +
    ' * parser4data.js v' + version + '\n' +
    ' * (c) 2017-' + new Date().getFullYear() + ' Yeer Fan\n' +
    ' * Released under the MIT License.\n' +
    ' */'


module.exports = {
    entry: 'index.js',
    dest: 'bin/parser4data.rollup.js',
    banner: banner,
    moduleName: 'parser4data',
    format: 'umd',
    external: Object.keys(dependencies),
    // paths: {µ
    //     d3: 'https://d3js.org/d3.v4.min.js'
    // }
    plugins: [
        babel({
            // babelrc: true
            babelrc: false,
            presets: ["es2015-rollup"]
        })
    ],
    globals: {
        'd3': 'D3'
    },

}

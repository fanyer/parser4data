const test = require('tap').test,
   {antibioticsParse,linkParse}=require('../../bin/parser4data.rollup.js');

test('antibiotics', function(t) {
  t.plan(1);
  t.type(antibioticsParse, 'function');
})

test('link', function(t) {
  t.plan(1);
  t.type(linkParse, 'function');
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
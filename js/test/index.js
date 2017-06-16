const test = require('tap').test,
    { antibioticsParse, linkParse } = require('../../bin/parser4data.rollup.js');

const testData = require('./data/antibiotics1')


test('antibiotics', function(t) {
    t.plan(3);
    t.type(antibioticsParse, 'function');
    t.equal(antibioticsParse(testData).bottom.length,7)
    t.equal(antibioticsParse(testData).top.length,8)
})

test('link', function(t) {
    t.plan(1);
    t.type(linkParse, 'function');
})

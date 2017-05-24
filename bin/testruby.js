#!/usr/bin/env node

const addon = require('./parser4data.js');
addon.linkParse({"a":"1212"})


// let data2=JSON.parse(data);
// console.log(data.toString())

// console.log(JSON.parse(data2).nodes)
// console.log(data)
// console.log(data2.constructor)


// let nodes=JSON.parse("{\"nodes\":[],\"links\":[]}").nodes
// console.log(nodes)
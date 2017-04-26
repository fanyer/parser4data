/*!
 * parser4data.js v0.0.1
 * (c) 2017-2017 Yeer Fan
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.parser4data = global.parser4data || {})));
}(this, (function (exports) { 'use strict';

var configTpl = {
    top: [{
        x: -7,
        y: 5,
        color: 'seagreen',
        tag: {
            cn: '头孢菌素类',
            en: 'Cephalosporins'
        },
        data: {
            rank: 0.2807,
            median: 117.4241,
            absolute: 59.31948
        },
        direction: 'left'
    }, {
        x: -6,
        y: 7,
        color: 'seagreen',
        tag: {
            cn: '青霉素',
            en: 'Penicillins'
        },
        data: {
            rank: 0.2506,
            median: 128.4729,
            absolute: 61.05134
        },
        direction: 'left'
    }, {
        x: -5,
        y: 8,
        color: 'seagreen',
        tag: {
            cn: '林可酰胺类',
            en: 'Lincosamides'
        },
        data: {
            rank: 0.606,
            median: 383.8253,
            absolute: 441.8302
        },
        direction: 'right'
    }, {
        x: -4,
        y: 6,
        color: 'seagreen',
        tag: {
            cn: '利福霉素类',
            en: 'Rifampins'
        },
        data: {
            rank: 0.0012,
            median: 0,
            absolute: 0
        },
        direction: 'right'
    }, {
        x: -3,
        y: 2,
        color: 'seagreen',
        tag: {
            cn: '多粘霉素类',
            en: 'Polymyxins'
        },
        data: {
            rank: 0.4012,
            median: 4.52788140,
            absolute: 2.895497
        },
        direction: 'right'
    }, {
        x: 1,
        y: 1,
        color: 'orange',
        tag: {
            cn: '碳青霉烯类',
            en: 'Carbapenems'
        },
        data: {
            rank: 0.0012,
            median: 0,
            absolute: 0
        },
        direction: 'left'
    }, {
        x: 2,
        y: 4,
        color: 'orange',
        tag: {
            cn: '糖肽类',
            en: 'Glycopeptides'
        },
        data: {
            rank: 0.5807,
            median: 1.63446,
            absolute: 2.246455
        },
        direction: 'right'
    }, {
        x: 5,
        y: 3,
        color: 'salmon',
        tag: {
            cn: '氨基糖苷类',
            en: 'Aminoglycosides'
        },
        data: {
            rank: 0.7506,
            median: 41.34121,
            absolute: 71.78424
        },
        direction: 'left'
    }],
    bottom: [{
        x: -2,
        y: 1,
        color: 'seagreen',
        tag: {
            cn: 'β-内酰胺',
            en: 'β-lactam'
        },
        data: {
            rank: 0.7265,
            median: 0.08101419,
            absolute: 0.6476569
        },
        direction: 'left'
    }, {
        x: -1,
        y: 3,
        color: 'seagreen',
        tag: {
            cn: '四环类素',
            en: 'Tetracyclines'
        },
        data: {
            rank: 0.5771,
            median: 362.3124,
            absolute: 385.8537
        },
        direction: 'left'
    }, {
        x: 0,
        y: 4,
        color: 'orange',
        tag: {
            cn: '磷霉素类',
            en: 'Fosfomycins'
        },
        data: {
            rank: 0.6590,
            median: 0.3104377,
            absolute: 1.35659
        },
        direction: 'right'
    }, {
        x: 3,
        y: 5,
        color: 'orange',
        tag: {
            cn: '氯霉素类',
            en: 'Chloramphenicois'
        },
        data: {
            rank: 0.0012,
            median: 362.3124,
            absolute: 385.8537
        },
        direction: 'left'
    }, {
        x: 4,
        y: 6,
        color: 'orange',
        tag: {
            cn: '大环内酯类',
            en: 'Macrolides'
        },
        data: {
            rank: 0.4843,
            median: 354.3231,
            absolute: 359.5278
        },
        direction: 'right'
    }, {
        x: 6,
        y: 7,
        color: 'salmon',
        tag: {
            cn: '磺胺类',
            en: 'Sulfonamides'
        },
        data: {
            rank: 0.8795,
            median: 34.39402,
            absolute: 116.4283
        },
        direction: 'left'
    }, {
        x: 7,
        y: 2,
        color: 'salmon',
        tag: {
            cn: '奎诺酮类',
            en: 'Quinolones'
        },
        data: {
            rank: 0.8036,
            median: 0,
            absolute: 0.8209219
        },
        direction: 'right'
    }],
    gap: [0, 4] //gap is the x value of central orange range's start & end, and start must lower than end
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * [parse description]
 * @param  {[type]} input [an Array]
 *                        like
 *                        
 * @return {[type]}       [description]
 */
/*seagreen   #00ab84*/
/*orange   #e4be6f*/
/*salmon   #cb8d88*/

function parse(input) {
    var output = {};

    input.sort(function (a, b) {
        return a[3] - b[3];
    });

    // calculate top Index & bottom Index
    var allSet = new Set(Array.from(Array(15).keys()));
    var topIndex = [0, 1, 2, 3, 4, 8, 9, 12];

    var topSet = new Set(topIndex);
    var bottomSet = new Set([].concat(toConsumableArray(allSet)).filter(function (x) {
        return !topSet.has(x);
    }));

    var bottomIndex = Array.from(bottomSet);

    // form output.top
    var top = topIndex.map(function (e, i) {

        var cn = input[e][0];
        var en = input[e][4];
        var rank = input[e][3] / 100;
        var median = input[e][2];
        var absolute = input[e][1];

        var color = rank < 0.75 ? "#00ab84" : rank < 0.9 ? "#e4be6f" : "#cb8d88";

        return {
            "x": configTpl.top[i].x,
            "y": configTpl.top[i].y,
            "tag": {
                "cn": cn,
                "en": en
            },
            "data": {
                "rank": rank,
                "median": median,
                "absolute": absolute
            },
            "color": color,
            "direction": configTpl.top[i].direction
        };
    });

    // form output.bottom
    var bottom = bottomIndex.map(function (e, i) {

        var cn = input[e][0];
        var en = input[e][4];
        var rank = input[e][3] / 100;
        var median = input[e][2];
        var absolute = input[e][1];

        var color = rank < 0.75 ? "#00ab84" : rank < 0.9 ? "#e4be6f" : "#cb8d88";

        return {
            "x": configTpl.bottom[i].x,
            "y": configTpl.bottom[i].y,
            "tag": {
                "cn": cn,
                "en": en
            },
            "data": {
                "rank": rank,
                "median": median,
                "absolute": absolute
            },
            "color": color,
            "direction": configTpl.bottom[i].direction
        };
    });

    // calculate the gap
    var seagreen = 0;
    var orange = 0;
    var salmon = 0;
    [].concat(toConsumableArray(top), toConsumableArray(bottom)).map(function (e, i) {
        if (e.color === '#00ab84') seagreen += 1;
        if (e.color === '#e4be6f') orange += 1;
        if (e.color === '#cb8d88') salmon += 1;
    });

    var gap = [seagreen, orange, salmon];

    output = {
        "top": top,
        "bottom": bottom,
        "gap": gap
    };

    return output;
}

var linkGraphConfig = {
    "nodes": [{
        "name": "维生素A"
    }, {
        "name": "维生素B1"
    }, {
        "name": "维生素B2"
    }, {
        "name": "维生素B3"
    }, {
        "name": "维生素B5"
    }, {
        "name": "维生素B6"
    }, {
        "name": "维生素B7"
    }, {
        "name": "维生素B9"
    }, {
        "name": "维生素B12"
    }, {
        "name": "维生素C"
    }, {
        "name": "胡萝卜素"
    }, {
        "name": "维生素E"
    }, {
        "name": "牛磺酸"
    }, {
        "name": "辅酶Q"
    }, {
        "name": "异黄酮"
    }, {
        "name": "维生素K"
    }, {
        "name": "家畜类"
    }, {
        "name": "蔬菜类"
    }, {
        "name": "豆类"
    }, {
        "name": "家禽类"
    }, {
        "name": "水果类"
    }, {
        "name": "人体肠道自主合成"
    }, {
        "name": "坚果类"
    }, {
        "name": "发酵食物类"
    }, {
        "name": "脏器类"
    }, {
        "name": "谷物类"
    }, {
        "name": "奶蛋类"
    }],
    "links": [{
        "source": 0,
        "target": 22,
        "color": "cyan",
        "value": 5
    }, {
        "source": 0,
        "target": 21,
        "color": "cyan",
        "value": 5
    }, {
        "source": 1,
        "target": 18,
        "color": "khaki",
        "value": 5
    }, {
        "source": 1,
        "target": 21,
        "color": "khaki",
        "value": 5
    }, {
        "source": 1,
        "target": 23,
        "color": "khaki",
        "value": 5
    }, {
        "source": 2,
        "target": 16,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 2,
        "color": "steelblue",
        "target": 20,
        "value": 5
    }, {
        "source": 2,
        "target": 21,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 2,
        "target": 25,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 2,
        "target": 23,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 3,
        "color": "salmon",
        "target": 25,
        "value": 5
    }, {
        "source": 3,
        "color": "salmon",
        "target": 20,
        "value": 5
    }, {
        "source": 3,
        "target": 21,
        "color": "salmon",
        "value": 5
    }, {
        "color": "orange",
        "source": 4,
        "target": 16,
        "value": 5
    }, {
        "source": 4,
        "target": 21,
        "color": "orange",
        "value": 5
    }, {
        "source": 4,
        "target": 17,
        "value": 5
    }, {
        "source": 4,
        "target": 22,
        "value": 5
    }, {
        "source": 4,
        "target": 23,
        "value": 5
    }, {
        "source": 5,
        "target": 21,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 5,
        "target": 17,
        "value": 5
    }, {
        "source": 5,
        "target": 24,
        "value": 5
    }, {
        "source": 5,
        "target": 22,
        "value": 5
    }, {
        "source": 6,
        "target": 20,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 6,
        "target": 19,
        "value": 5
    }, {
        "source": 6,
        "target": 21,
        "value": 5
    }, {
        "source": 6,
        "target": 22,
        "value": 5
    }, {
        "source": 6,
        "target": 24,
        "value": 5
    }, {
        "source": 7,
        "target": 17,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 7,
        "target": 18,
        "value": 5
    }, {
        "source": 7,
        "target": 20,
        "value": 5
    }, {
        "source": 7,
        "target": 21,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 7,
        "target": 24,
        "value": 5
    }, {
        "source": 8,
        "target": 20,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 8,
        "target": 21,
        "value": 5
    }, {
        "source": 8,
        "target": 22,
        "value": 5
    }, {
        "source": 8,
        "target": 23,
        "value": 5
    }, {
        "source": 8,
        "target": 24,
        "value": 5
    }, {
        "source": 9,
        "target": 18,
        "value": 5
    }, {
        "source": 9,
        "target": 19,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 9,
        "target": 20,
        "value": 5
    }, {
        "source": 9,
        "target": 21,
        "value": 5
    }, {
        "source": 10,
        "target": 19,
        "value": 5
    }, {
        "source": 10,
        "target": 20,
        "value": 5
    }, {
        "source": 10,
        "target": 21,
        "value": 5
    }, {
        "source": 10,
        "target": 23,
        "value": 5
    }, {
        "source": 10,
        "target": 26,
        "value": 5
    }, {
        "source": 11,
        "target": 16,
        "value": 5
    }, {
        "source": 11,
        "target": 20,
        "value": 5
    }, {
        "source": 11,
        "target": 21,
        "value": 5
    }, {
        "source": 12,
        "target": 17,
        "value": 5
    }, {
        "source": 12,
        "target": 18,
        "value": 5
    }, {
        "source": 12,
        "target": 19,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 12,
        "target": 20,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 12,
        "target": 21,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 12,
        "target": 22,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 12,
        "target": 24,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 12,
        "target": 25,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 12,
        "target": 26,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 13,
        "target": 17,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 13,
        "target": 19,
        "value": 5
    }, {
        "source": 13,
        "target": 20,
        "value": 5
    }, {
        "source": 13,
        "target": 21,
        "value": 5
    }, {
        "source": 14,
        "target": 16,
        "value": 5
    }, {
        "source": 14,
        "target": 18,
        "value": 5
    }, {
        "source": 14,
        "target": 20,
        "value": 5
    }, {
        "source": 14,
        "target": 21,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 14,
        "target": 23,
        "color": "steelblue",
        "value": 5
    }, {
        "source": 15,
        "target": 19,
        "value": 5
    }, {
        "source": 15,
        "target": 20,
        "value": 5
    }, {
        "source": 15,
        "target": 21,
        "value": 5
    }, {
        "source": 15,
        "target": 22,
        "value": 5
    }, {
        "source": 15,
        "target": 24,
        "value": 5
    }]
};

// usual basic function
var index = function index(s, find) {
    return s.indexOf(find) + 1;
};

// for fast query
var _cache = {};

// extend operator
var _alias = [/@/g, "_e.", /AND/gi, "&&", /OR/gi, "||", /<>/g, "!=", /NOT/gi, "!", /([^=<>])=([^=]|$)/g, '$1==$2'];

var _rQuote = /""/g;
var _rQuoteTemp = /!~/g;

// compile
var _complite = function _complite(code) {
    return eval("0," + code);
};

// convert operator to standard js symbols
var _interpret = function _interpret(exp) {
    exp = exp.replace(_rQuote, "!~");
    var arr = exp.split('"');
    var i,
        n = arr.length;
    var k = _alias.length;

    for (var i = 0; i < n; i += 2) {
        var s = arr[i];
        for (var j = 0; j < k; j += 2) {
            if (index(s, _alias[j]) > -1) {
                s = s.replace(_alias[j], _alias[j + 1]);
            }
        }
        arr[i] = s;
    }

    for (var i = 1; i < n; i += 2) {
        arr[i] = arr[i].replace(_rQuoteTemp, '\\"');
    }
    return arr.join('"');
};

// define template function
var _templ = function (_list) {
    var _ret = [];
    var _i = -1;

    for (var _k in _list) {
        var _e = _list[_k];
        if (_e != SQL.prototype[_k]) {
            if ($C) {
                _ret[++_i] = _e;
            }
        }
    }
    return _ret;
}.toString();

// extend Query method
var Query = function Query(exp) {
    if (!exp) {
        return [];
    }

    var fn = _cache[exp];

    try {
        if (!fn) {
            var code = _interpret(exp);
            code = _templ.replace("$C", code);
            fn = _cache[exp] = _complite(code);
        }
        return fn(this.data);
    } catch (e) {
        return [];
    }
};

function SQL(data) {
    this.type = 'SQL';
    this.data = data;
}

function sql(data) {
    return new SQL(data);
}

SQL.prototype = {
    constructor: SQL,
    Query: Query
};

function clone2(arr) {
  return Object.assign([], arr);
}

/*seagreen   #00ab84*/
/*orange   #e4be6f*/
/*salmon   #cb8d88*/

//  right rect #b5d8e1
function parse$1(rawData) {
    var input = rawData.left;

    var nodes = clone2(linkGraphConfig.nodes);

    input.map(function (e, i) {
        nodes[i].color = e.color;
    });

    var links = [];

    var colorsA = [];

    // let linkValues = d3.scale()
    //     .domain(colorsA)
    //     .range([5,8,10]);

    var linkValues = {
        '#00ab84': 3,
        '#e4be6f': 6,
        '#cb8d88': 9
    };

    input.map(function (E, I) {

        var linksFinded = sql(linkGraphConfig.links).Query('@source==' + I);

        linksFinded.forEach(function (e, i) {

            if (colorsA.indexOf(E.color) === -1) {
                colorsA.push(E.color);
            }

            e.color = E.color;

            // e.strokeWidth = (colorsA.indexOf(E.color)+1)*3
            e.strokeWidth = linkValues[E.color];
        });

        for (var i = 0; i < linksFinded.length; i++) {
            links.push(linksFinded[i]);
        }
    });

    return {
        nodes: nodes,
        links: links
    };
}

// a        21,22
// b1       18,21,23
// b2       16,21,20,23,25
// b3       25,21,20
// b5       16,17,21,22,23
// b6       17, 22,24,21


// b7       19,20,21,22,24
// b9       21,17,18,24,20
// b12      20,21,23,22,24   
// C        18,20,19,21
// 胡萝卜    19,20,21,23,26
// E        16,20,21


// 牛磺酸    18,17,19,20,21,22,24,25,26
// 辅酶Q     19,21,17,20


// 异黄酮    21,23,  20,18,16
// K        21,24,22,20,19


//异黄酮
// source  14


// right  pdf
// 1      4
// 2      5
// 3      5
// 4      6
// 5      12
// 6      16
// 7      7
// 8      6
// 9      6
// 10     3
// 11     2


// left pdf
// a        2
// b1       3
// b2       5
// b3       3
// b5       5
// b6       4
// b7       5
// b9       5
// b12      5
// c        4
// 胡萝卜    5
// e        3
// 牛磺酸    9
// 辅酶Q     4
// 异黄酮    5
// K        5

Object.values = function (x) {
    return Object.keys(x).reduce(function (y, z) {
        return y.push(x[z]) && y;
    }, []);
};

exports.antibioticsParse = parse;
exports.linkParse = parse$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));

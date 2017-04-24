Object.values = x =>
    Object.keys(x).reduce((y, z) =>
        y.push(x[z]) && y, []);


export * as antibioticsParser from './js/estimate-antibiotics.parser'
export * as linkParser from './js/link-graph.parser'

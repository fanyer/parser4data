Object.values = x =>
    Object.keys(x).reduce((y, z) =>
        y.push(x[z]) && y, []);


export  {parse as antibioticsParse} from './js/estimate-antibiotics.parser'
export {parse as linkParse} from './js/link-graph.parser'

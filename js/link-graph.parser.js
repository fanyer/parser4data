import { linkGraphConfig } from '../default-config/guide-goodness.config'
import { sql } from './utils/sql'
import { clone2 } from './utils/clone'


//  right rect #b5d8e1
export function parse(rawData) {
    let input = rawData.left;

    let nodes = clone2(linkGraphConfig.nodes);

    input.map((e, i) => {
        nodes[i].color = e.color;
    });

    let links = []

    let colorsA=[];

    // let linkValues = d3.scale()
    //     .domain(colorsA)
    //     .range([5,8,10]);


    input.map((E, I) => {

        let linksFinded = sql(linkGraphConfig.links).Query('@source==' + I)

        linksFinded.forEach((e, i) => {

            if(colorsA.indexOf(E.color)===-1){
                colorsA.push(E.color)
            }

            e.color = E.color

            e.strokeWidth = (colorsA.indexOf(E.color)+1)*3
        })

        for (var i = 0; i < linksFinded.length; i++) {
            links.push(linksFinded[i])
        }


    })



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

# parser

The C++ interface make it sure that much transforming in cpu computation wont't block function invokes.

For small overhead transform, it may also be realized by raw js.


Toolchain is various scripts for maintaining.


### antibioticsParser.parse()
```
import {antibioticsParser} from 'parser4data'

antibioticsParser.parse(rawData)

//rawData is something like
[
    ["β-内酰胺", 0, 0.07846749, 90.12, "β-lactam"],
    ["青霉素类", 56.90392, 128.4729, 22.77, "penicillins"],
    ["头孢菌素类", 56.90392, 117.4241, 27.59, "cephalosporins"],
    ["碳青霉烯类", 0, 0, 0.12, "carbapenems"],
    ["氨基糖苷类", 26.4687, 41.11123, 28.55, "aminoglycosides"],
    ["四环素类", 299.4279, 362.2699, 89.28, "tetracyclines"],
    ["氯霉素类", 0.217232, 3.805371, 85.06, "chloramphenicols"],
    ["大环内酯类", 316.0028, 359.5278, 41.45, "macrolides"],
    ["林可酰胺类", 399.4152, 383.8253, 52.65, "lincosamides"],
    ["利福霉素类", 0, 0, 0.12, "rifampins"],
    ["糖肽类", 1.857108, 1.63446, 52.53, "glycopeptides"],
    ["多粘菌素类", 5.450041, 4.545008, 53.73, "polymyxins"],
    ["磷霉素类", 0, 0.3075992, 0.12, "fosfomycins"],
    ["喹诺酮类", 0, 0, 0.12, "quinolones"],
    ["磺胺类", 31.66375, 34.33797, 47.11, "sulfonamides"]
]


```
### linkParser.parse()
```
import {linkParser} from 'parser4data'

linkParser.parse(rawData)

//rawData is something like
{
    "left": [{
        "name": "维生素A",
        "color": "#00ab84"
    }, {
        "name": "维生素B1",
        "color": "#e4be6f"
    }, {
        "name": "维生素B2",
        "color": "#e4be6f"
    }, {
        "name": "维生素B3",
        "color": "#e4be6f"
    }, {
        "name": "维生素B5",
        "color": "#e4be6f"
    }, {
        "name": "维生素B6",
        "color": "#e4be6f"
    }, {
        "name": "维生素B7",
        "color": "#e4be6f"
    }, {
        "name": "维生素B9",
        "color": "#e4be6f"
    }, {
        "name": "维生素B12",
        "color": "#cb8d88"
    }, {
        "name": "维生素C",
        "color": "#e4be6f"
    }, {
        "name": "胡萝卜素",
        "color": "#e4be6f"
    }, {
        "name": "维生素E",
        "color": "#e4be6f"
    }, {
        "name": "牛磺酸",
        "color": "#cb8d88"
    }, {
        "name": "辅酶Q",
        "color": "#e4be6f"
    }, {
        "name": "异黄酮",
        "color": "#e4be6f"
    }, {
        "name": "维生素K",
        "color": "#e4be6f"
    }]
}


```

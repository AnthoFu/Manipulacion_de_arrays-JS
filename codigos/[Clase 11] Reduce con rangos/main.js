const items = [
    1,
    3,
    2,
    3,
    3,
    1,
    10
]

const respuesta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});


console.log('[Respuesta]:', respuesta)

const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];

data.map (item => item.level)
const respuesta_1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1;
    }
    else {
        obj[item] = obj[item] + 1
    }
    return obj;
    }, {});

console.log ('[Respuesta 1]:', respuesta_1)


const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const entre = (numero, minimo, maximo) => numero >= minimo && numero <= maximo;

const iteracionDeRangos = numeros.reduce(
    (acumulacion, item) => {
        if (entre (item, 1 , 5)) acumulacion["1-5"] = acumulacion["1-5"] + 1;
        else if (entre (item, 6 , 10)) acumulacion["6-10"] = acumulacion["6-10"] + 1;
        else if (entre (item, 11 , 15)) acumulacion["11-15"] = acumulacion["11-15"] + 1;
    return acumulacion;
    },
    {
        "1-5":0, "6-10":0, "11-15":0
    }
);
console.log ('[Iteracion de rangos]:', iteracionDeRangos)
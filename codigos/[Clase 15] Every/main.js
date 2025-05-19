// El metodo every hace que TODOS los elementos de un array tengan que pasar esa condicion, sino, retorna false.

const numeros = [
    1,
    39,
    20,
    29,
    10,
    13
]

// ¿TODOS los numeros son menores a 40?

// Metodo tradicional sin el every

respuesta = true;

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    if (element >= 40) {
        respuesta = false
    }

}

console.log('[Metodo tradicional]: ¿Todos los numeros son menores a 40?:', respuesta)

// Con el metodo every

const respuesta_every = numeros.every(item => item <= 40)

console.log('[Metodo every]: ¿Todos los numeros son menores a 40?:', respuesta_every)


// Practica
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

// Problematica: De este array de personas para ser admitidas todas deben ser mayores de 15 años.

const edades = team.map (item => item.age);
console.log ('[Edades]:', edades)

const sonMenores = team.every (edades => edades <= 15);

if (sonMenores=== false){
    console.log('[Son menores]: Lo lamento, no todos en el equipo son mayores a 15 años')
} else {
    console.log('[Son mayores]: Felicidades, todo el equipo es mayor a 15 años')
}
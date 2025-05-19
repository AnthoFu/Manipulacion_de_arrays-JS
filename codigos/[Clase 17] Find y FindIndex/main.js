const numeros = [1, 30, 49, 29, 10, 13];

// El metodo find es como el filter, pero este en vez de retornar un array completo (como el filter) solo nos trae ese primer elemento que se busque, por ejemplo, busquemos el numero 30 en este array
// Este seria el metodo find de la forma tradicional, iterar el elemento hasta que element sea 30.
for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    if (element === 30) {
        respuesta = element;
        break;
    }
}

console.log('[Metodo tradicional]:', respuesta)

// Este seria con el metodo find, que cuando encuentra el item lo retorna
const respuesta_find = numeros.find(item => item === 30)
console.log('[Metodo find]:', respuesta_find)





const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];


// Aqui buscamos el elemento del array donde su id sea panquecas
const respuesta_3 = products.find (item => item.id === '🥞')
console.log ('[Respuesta producto]:', respuesta_3) // Esto retorna todo el elemento, con el nombre, precio y el id

// Hay una variacion para el find, este seria 'findIndex'
// finIndex nos devuelve el lugar del elemento en el array
const respuesta_4 = products.findIndex (item => item.id === '🥞')
console.log ('[Respuesta producto]: Ubicacion del producto "🥞" ', respuesta_4)
// IMPORTANTE: SI FINDINDEX NO ENCUENTRA EL PRODUCTO RETORNA -1
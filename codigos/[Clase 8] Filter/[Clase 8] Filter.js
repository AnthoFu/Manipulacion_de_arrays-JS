const palabras = [
    'Hola',
    'Casa',
    'Testeo',
    'Cargador'
]

const filtroViejo = [];
for (let index = 0; index < palabras.length; index++) {
    const item = palabras[index];
    if (item.length >=6){
        filtroViejo.push(item)
    }
}

console.log('[Forma de filtrar vieja]:', filtroViejo);
console.log ('[Original despues del filtro viejo]:', palabras);

const filtro = palabras.filter(item => item.length >= 6);

console.log ('[Metodo filter]:', filtro)
console.log ('[Original despues del metodo filter]:', palabras)

// El metodo filter es inmutable, es decir, no cambia los valores del array original


// Ahora hagamos un filtro donde las ordenes que esten delivered:true de la clase de transformaciones avanzadas.
const orders = [
    {
        customer:'Adriana Guadalajara',
        total: 30,
        delivered: false

    },
    
    {
        customer: 'Manuel Lorenzo',
        total: 120,
        delivered: true
    },

    {
        customer: 'Anthony Fuentes',
        total: 300,
        delivered:false
    },

    {
        customer: 'Pedro',
        total: 100,
        delivered: true
    },

    {
        customer: 'Alberto Urdaneta',
        total: 520,
        delivered:false
    },
    ]

const ordenes_entregadas = orders.filter (item => item.delivered === true && item.total > 100);
console.log ('[Ordenes entregadas]:', ordenes_entregadas)


// Ahora hacemos un query para filtrar por los caracteres que tenga un nombre en las ordenes
const busqueda = (query) => {
    return orders.filter (item => {
        return item.customer.includes(query)
    })
}


// Aqui hacemos el query
console.log('[Query]:',busqueda('Anthony'))
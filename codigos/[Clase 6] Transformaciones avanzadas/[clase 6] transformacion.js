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

console.log ('[Original]:', orders)

const total_orders = orders.map(item => item.total) // Mapeamos order, buscamos el total y lo guardamos en la variable total_orders

console.log ('[Map.total]:', total_orders)

// const tax = orders.map(item => {
//     item.tax = .19
//     return item
// })

// console.log ('[Tax]:', tax)
console.log ('[Original]:', orders) // Aca se agrega el tax al array original porque hacemos 'return item', asi que aunque map sea inmutable, al hacer return, se cambia la referencia en memoria


const tax_sin_return = orders.map(item => {
    return {
        ...item,
        tax: 0.19
    }
})

console.log ('[Tax_sin_return]:', tax_sin_return)
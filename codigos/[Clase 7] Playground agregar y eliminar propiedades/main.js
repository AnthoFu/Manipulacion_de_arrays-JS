const Input=
[
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    }
]

// const Output=
// [
//     {
//         name: "Product 1",
//         price: 1000,
//         stock: 10,
//         taxes: 190
//     },
//     {
//         name: "Product 2",
//         price: 2000,
//         stock: 20,
//         taxes: 380
//     }
// ]

const AgregarTaxes= (Input) => {
    return Input.map((item) => ({
        ...item,
        'taxes': Math.trunc(item.price*0.19)
    }))
}

const app1 = document.getElementById('app1')
const output = AgregarTaxes(Input);

app1.innerHTML = `
<ul>
    <li>Original: ${Input.map(item => 
        `${item.name} (Precio: ${item.price})`
    ).join(', ')}</li>
    
    <li>Resultado: ${output.map(item => 
        `${item.name} - Precio: ${item.price}, Stock: ${item.stock}, Impuestos: ${item.taxes}`
    ).join(', ')}</li>
</ul>
`;
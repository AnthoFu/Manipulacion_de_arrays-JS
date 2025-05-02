const totals = [
    1,
    2,
    3,
    4
]


// Este es el metodo tradicional que se utilizaria para este caso para juntar el total de todos los elementos del array
let sum = 0

for (let index = 0; index < totals.length; index++) {
    const element = totals[index]
    sum = sum + element
    
}

console.log ('[Metodo tradicional]:' , sum)

// Este es con el metodo reduce
const suma_total = totals.reduce((suma, element)=> suma + element, 0)

console.log ('[Reduce]:', suma_total)
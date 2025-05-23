const meses = ['March', 'Jan', 'Feb', 'Dec'];
meses.sort()
console.log('[Meses ordenados por ASCII]:', meses)
// Por defecto, el sort ordenara por tabla ASCII, donde las mayusculas, minusculas, simbolos, numeros
// Tienen asignado un numero binario diferente.

const numeros = [1, 30, 4, 21, 100000]
numeros.sort() // Los ordena: 1, 100000, 21, 30, 4
console.log('[Numeros ordenados por ASCII]:', numeros)
// Pasara lo mismo con los numeros, para ello podemos modificar los parametros de sort()

numeros.sort((a,b) => a-b) // Ordena de menor a mayor
// Si a es menor que b, devuelve un numero negativo, si son iguales devuelve 0 y si a es mayor que b devuelve un numero positivo
console.log('[Numeros a-b]:', numeros) // [1, 4, 21, 30, 100000]
numeros.sort((a,b) => b-a) // Ordena de mayor a menor
console.log('[Numeros b-a]:', numeros) // [100000, 30, 21, 4, 1]

// Ordenando strings
const palabras = ['reservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana']
palabras.sort();
console.log('[Palabras ordenadas por ASCII]:', palabras)
// En este caso, el sort() no es suficiente para ordenar palabras con acentos, por lo que se recomienda usar localeCompare
palabras.sort((a, b) => a.localeCompare(b)) // Ordena por el locale del navegador
// En este caso, el locale es el español, por lo que se ordenara por el idioma español
console.log('[Palabras ordenadas por localeCompare]:', palabras)


// Ordenando objetos
const orders = [
    {
        customerName: 'Adriana',
        total: 600,
        delivered: true,
    },
    {
        customerName: 'Manuel',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Aldryn',
        total: 1840,
        delivered: true,
    },
    {
        customerName: 'Ivanna',
        total: 240,
        delivered: true
    },
]

// Ordenando por total
orders.sort((a, b) => b.total - a.total) // Ordena de mayor a menor
console.log('[Orders ordenados por total]:', orders)

// Para ordenar las fechas. 
const months = ['Febrero', 'Julio', 'kasdjsfj', 'Diciembre', 'Enero']
function ordenarMeses(month){
    switch (month.toUpperCase()) {
        case 'ENERO':
            return 1
        case 'FEBRERO':
            return 2
        case 'MARZO':
            return 3
        case 'ABRIL':
            return 4
        case 'MAYO':
            return 5
        case 'JUNIO':
            return 6
        case 'JULIO':
            return 7
        case 'AGOSTO':
            return 8
        case 'SEPTIEMBRE':
            return 9
        case 'OCTUBRE':
            return 10
        case 'NOVIEMBRE':
            return 11
        case 'DICIEMBRE':
            return 12
        default:
            return 13;
        }
    }
months.sort((a, b) => ordenarMeses(a) - ordenarMeses(b))
console.log('[Meses ordenados por ordenarMeses]:', months)

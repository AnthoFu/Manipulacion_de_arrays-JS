const input = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]

const contadorDePalabras = (array) => { // Esta función cuenta la cantidad de palabras en un array de strings
    // La función recibe un array de strings y devuelve la cantidad de palabras en el array
    return array.flatMap((item) => item.split(" ").length) // Separa cada string en palabras y cuenta la cantidad de palabras
    // Se usa flatMap para aplanar el array de arrays de palabras en un solo array
        .reduce((suma, item) => suma += item, 0); // Se usa reduce para sumar la cantidad de palabras en el array
    // Se usa el operador de suma += para sumar la cantidad de palabras en el array
}

console.log('Output:', contadorDePalabras(input));
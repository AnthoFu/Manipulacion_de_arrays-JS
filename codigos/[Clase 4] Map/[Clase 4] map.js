const letras = ['a','b','c','d'];


// Función sin el map
const arrayNuevo = [];
for (let index = 0; index < letras.length; index++){
    const element = letras[index];
    arrayNuevo.push(element+'++');
}

console.log ('Original:', letras)
console.log ('Array nuevo:', arrayNuevo)

// Función con el map

const arrayConMap = letras.map(item => item + '++');
console.log ('Array con map:', arrayConMap)
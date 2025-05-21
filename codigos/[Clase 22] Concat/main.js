// Concat es inmutable, es decir no modificia el array original, sino que genera uno nuevo 🤓

const elementos = [1,1,2,2]
const otrosElementos = [3,3,4,4,]

// Como se haria sin el concat, de forma tradicional:
const nuevoArray = [...elementos] // Aqui hay que usar [...] para que no modifique el array original.
for (let index = 0; index < otrosElementos.length; index++) {
    const element = otrosElementos[index];
    nuevoArray.push(element);
}

console.log('[Metodo concat tradicional]:', nuevoArray);

//Metodo con concat
const nuevoArrayConcat = elementos.concat(otrosElementos);

console.log ('[Metodo concat]:',nuevoArrayConcat);

//Metodo concatenacion manual:
const nuevoArrayManual = [...elementos,...otrosElementos];
console.log ('[Metodo concat manual]:', nuevoArrayManual);

const pruebaManual = [...elementos, 'Palabra string']; // Si intentamos concatenar un string normal, se agrega 'Palabra string'
console.log ('[Prueba de concatenacion 1]:', pruebaManual);

const pruebaManual_2 = [...elementos, ...'Palabra string']; //Si intentamos concatenar un string como spread operation, separara las letras como elementos en cada uno
console.log ('[Prueba de concat manual 2]:', pruebaManual_2); // P', 'a', 'l', 'a', 'b', 'r', 'a', ' ', 's', 't', 'r', 'i', 'n', 'g'

const pruebaConcat = elementos.concat('Palabra string'); // Con concat no es necesario pensar mucho en esta logica, lo añade como otro objeto en el array de forma predeterminada, sin necesidad de colocarlo como spread operation "..."
console.log ('[Prueba de concat]:', pruebaConcat)

//Si lo que queremos el modificar el array original, con un push podria bastar, utilizando spread operation para evitar asi traernos tambien los corchetes "[]"
elementos.push(...otrosElementos);
console.log('[Elementos pusheados]:', elementos)
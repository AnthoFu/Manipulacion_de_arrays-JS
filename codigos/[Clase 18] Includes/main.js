// El metodo 'Include' determina si en el array incluye un determinado elemento.

const mascotas = ['perro', 'gato', 'cuy', 'pez']


let incluyeEnArray = false; // Definimos falso el incluyeEnArray 

for (let index = 0; index < mascotas.length; index++) {
    const element = mascotas[index];
    if (element === 'perro'){
        incluyeEnArray = true;
        break;
    }
}

console.log ('[Metodo tradicional]:', incluyeEnArray)

const respuesta_includes = mascotas.includes('perro') // Aqui no se necesita un arrow function como los demas, es mas sencillo

console.log ('[Metodo includes]:', respuesta_includes)
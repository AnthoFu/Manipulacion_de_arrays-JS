const elementos = ["Fuego", "Aire", "Agua"]

// El metodo Join
// El metodo Split


// Metodo tradicional de Join
let respuesta_final = '';
const separador = '--'
for (let index = 0; index < elementos.length; index++) {
    const elemento = elementos[index];
    if (index === elementos.length - 1) {
        respuesta_final = respuesta_final + elemento
    } else {
        respuesta_final = respuesta_final + elemento + separador
    }
}

console.log ('[Metodo tradicional Join]:', respuesta_final)

// Metodo con Join
const respuesta_join = elementos.join('--')
console.log ('[Metodo con Join]:', respuesta_join)

// Ahora vamos con el metodo split
// Imaginemos que tenemos un titulo
const titulo = 'Curso de manipulacion de Arrays';

// Y quisieramos volver ese titulo un array
const titulo_split = titulo.split(' ');
console.log ('[Titulo original]:', titulo)
console.log ('[Titulo con split]:', titulo_split)
// Esto retornara un array con la separacion de las palabras


// Imaginemos que quiseramos hacerle split para poder luego colocarlo en la URL de una pagina web
// Lo que haremos ahora es unirlos con join y volverlos todos a minusculas con el metodo toLowerCase
const titulo_para_url = titulo_split.join('-').toLowerCase();
console.log ('[Titulo final para URL]:' ,titulo_para_url)

// Y listo, esto deberia retornar un string con una separacion de '-'
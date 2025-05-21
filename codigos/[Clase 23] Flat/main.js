// Flat es inmutable, es decir, no modifica el array original sino que crea uno nuevo 🤓 
// Este permite aplanar los sub arrays hasta un formato en especifico.


// Ejemplo:
const matriz_1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// Con el metodo for tradicional:

const nuevoArray = []
for (let i = 0; i < matriz_1.length; i++) {
    const array = matriz_1[i];
    // Por cada array adentro de otro array tendriamos que colocar un for dentro de este
    for (let j = 0; j < array.length; j++) {
        const element = matriz_1[i][j]; // O tambien const element = array[j]; ya que array lo definimos anteriormente
        nuevoArray.push(element);
    }
}

console.log ('[Metodo tradicional]:', nuevoArray)

// Con flat, realiza todo este sistema de 'Aplanado de arrays' mucho mas sencillo, podria aplanar matrices mas complejas como:

const matriz_2 = [
    [1,2,3],
    [4,5,6,[1,2,[1,2]]],
    [7,8,9]
] 
// matriz_2.flat();
// Pero para que aplane mas de un solo nivel, tenemos que definirlo dentro del flat(aqui va el nivel de aplanamiento)

const respuesta_flat = matriz_2.flat(4);
console.log ('[Respuesta flat]:', respuesta_flat )

// Para resolver este algoritmo y utilizar recursividad sin tener que estar colocando for, mas for, mas for sin el metodo flat
// Podriamos realizarlo de la siguiente forma:

const aplanar = (listaParaAplanar = [], data = []) =>{
    if (typeof listaParaAplanar != "object") return [listaParaAplanar]; // Si el tipo de la lista por aplanar no es objeto, retorna la lista.
    listaParaAplanar.forEach(element => { // Por cada elemento de lista por aplanar
        if (typeof element === 'object'){ // si el tipo de elemento es objeto
            aplanar(element , data); // Llama a la funcion aplanar nuevamente, pero ahora con el elemento que es objeto y el data que es el array vacio
        } else {
            data.push (element) // Si no es objeto, lo agrega al array data
        }
    });
    return data // Retorna el array data
}

console.log('[Aplanar sin usar flat]:', aplanar(matriz_2)) 
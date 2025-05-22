// El flatMap es una combinación de map y flat, que permite transformar un array y luego aplanar el resultado en un solo nivel.
const usuarios = [
    {userId: 1, userName: 'Adriana', attributes: ['Nice, Cute']},
    {userId: 2, userName: 'Manuel', attributes: ['Funny, Black']},
    {userId: 3, userName: 'Jonnathan', attributes: ['Smart, Cool']},
    {userId: 4, userName: 'Anthony', attributes: ['Dumb, Perseverant']},
]

const respuesta_1 = usuarios.map(usuario => usuario.attributes)
console.log('[Respuesta 1]',respuesta_1)
// En este caso, el resultado es un array de arrays, donde cada sub-array contiene los atributos de cada usuario.
// Para aplanar el resultado, se puede usar flatMap

const respuesta_2 = usuarios.map(usuario => usuario.attributes).flat()
console.log('[Respuesta 2]',respuesta_2)
// En este caso, el resultado es un solo array que contiene todos los atributos de los usuarios, aplanando el resultado en un solo nivel.
// Sin embargo, esto requiere dos pasos: primero mapear y luego aplanar el resultado.

const respuesta_3 = usuarios.flatMap(usuario => usuario.attributes)
console.log('[Respuesta 3]',respuesta_3)
// En este caso, el resultado es un solo array que contiene todos los atributos de los usuarios, aplanando el resultado en un solo nivel.
// El flatMap es útil cuando se quiere transformar un array y aplanar el resultado en un solo nivel, evitando la necesidad de usar map y luego flat.


const calendario = {
    primaryCalendar:[
        {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 15, 30),
        title: 'Cita 1',
    }
    ,
        {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: 'Cita 2',
    }
    ],
    secondaryCalendar:[
        {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 12, 30),
        title: 'Cita 3',
    },
    
    {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: 'Cita 4',
    }
    ]
}

const respuesta_4 = Object.keys(calendario);
console.log('[Respuesta 4]',respuesta_4)
// En este caso, el resultado es un array de strings que contiene las claves del objeto calendario.

const respuesta_5 = Object.values(calendario);
console.log('[Respuesta 5]',respuesta_5)
// En este caso, el resultado es un array de arrays que contiene los valores del objeto calendario.
// Cada sub-array contiene los eventos de cada calendario.

const respuesta_6 = Object.values(calendario).flatMap(item => {
    return item.map(date => date.startDate)
});
console.log('[Respuesta 6]',respuesta_6)
// En este caso, el resultado es un solo array que contiene todas las fechas de inicio de los eventos de ambos calendarios.


const respuesta_7 = Object.values(calendario).flatMap(item => {
    return item.map(date => date.startDate.toLocaleDateString())
});
console.log('[Respuesta 7]',respuesta_7)
// En este caso, el resultado es un solo array que contiene todas las fechas de inicio de los eventos de ambos calendarios, formateadas como cadenas.


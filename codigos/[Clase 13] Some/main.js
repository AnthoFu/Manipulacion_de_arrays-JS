const numeros = [
    1,
    2,
    3,
    4
];

// Este método nos devuelve true o false sí al menos 1 elemento de nuestro array cumple con la condición.
// Forma nativa con ciclo for
let respuesta = false;
for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    if (element % 2 === 0) {
        respuesta = true;
        break;
    }
}
console.log('[Respuesta]:', respuesta)


// Forma para realizarlo con el metodo some
const respuesta2 = numeros.some(item => item % 2 === 0); // Sí al menos 1 elemento de nuestro array cumple con la condición, devuelve true.

console.log('[Respuesta 2]:', respuesta2)

const orders = [
    {
        customer: 'Adriana Guadalajara',
        total: 30,
        delivered: false

    },

    {
        customer: 'Manuel Lorenzo',
        total: 120,
        delivered: true
    },

    {
        customer: 'Anthony Fuentes',
        total: 300,
        delivered: false
    },

    {
        customer: 'Pedro',
        total: 100,
        delivered: true
    },

    {
        customer: 'Alberto Urdaneta',
        total: 520,
        delivered: false
    },
]


const respuesta3 = orders.some(item => item.delivered)
console.log('[Respuesta 3]:', respuesta3)



const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping';

const seInterpone = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
        {start: date.startDate, end: date.endDate},
        {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log ('[¿Se interponen fechas?]:', seInterpone(newAppointment))
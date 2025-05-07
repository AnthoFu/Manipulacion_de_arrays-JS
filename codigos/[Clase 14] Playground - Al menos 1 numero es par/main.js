const Input= [1, 3, 5, 7, 10, 11]
const Input_2= [1, 3, 5]

const respuesta_input_1 = Input.some (item => item % 2 === 0);
const respuesta_input_2 = Input_2.some (item => item % 2 === 0);

console.log ('[Respuesta 1]', respuesta_input_1, '[Respuesta 2]:', respuesta_input_2)
const input_1 = [2, 4, 6, 8, 10]
const input_2 = [1, 3, 5, 7, 10, 11]
const input_3 = [1, 3, 5]
const input_4 = []

const verificador = (input) => {
    if (input.length === 0) {
        return false
    } else {
        const respuesta = input.every(item => item % 2 ===0)
        return respuesta
    }
}

console.log ('[Verificador de pares]: Input 1 =', verificador(input_1))
console.log ('[Verificador de pares]: Input 2 =', verificador(input_2))
console.log ('[Verificador de pares]: Input 3 =', verificador(input_3))
console.log ('[Verificador de pares]: Input 4 =', verificador(input_4))
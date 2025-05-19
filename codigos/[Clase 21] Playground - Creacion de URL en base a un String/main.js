const Input_1 = "La forma de correr Python"
const Input_2 = "La API para nunca parar de aprender"
const Input_3 = "Curso de Arrays"

const transformadorParaURL = (input) => {
    const URL = input.split(' ').join('-').toLowerCase();
    return URL
}

console.log ('[Output 1]:', transformadorParaURL(Input_1))
console.log ('[Output 2]:', transformadorParaURL(Input_2))
console.log ('[Output 3]:', transformadorParaURL(Input_3))
const Input_1 = [
    1,
    1,
    1,
]

const Input_2 = [
    2,
    4,
    8
]

const Input_3 =[
    0
]

const sumarTotal = (numeros) =>{
    numeros.reduce((sumaA, sumaB)=> sumaA + sumaB, 0);
    return numeros;
}

console.log('[Output 1]:', sumarTotal(Input_1))
console.log('[Output 2]:', sumarTotal(Input_2))
console.log('[Output 3]:', sumarTotal(Input_3))
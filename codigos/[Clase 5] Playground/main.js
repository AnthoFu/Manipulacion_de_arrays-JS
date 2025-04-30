const input = [2, 4, 5, 6, 8]

const input2 = [1, 1, -2, -3]

const app1 = document.getElementById('app1')
function multiplyElements(input) {
    return input.map(numeros => numeros * 2)
}

const output = multiplyElements(input);
app1.innerHTML = `

<ul>
    <li>Multiplicar: (${input}) * 2</li>
    <li>Resultado: [${output}]</li>
</ul>
`

console.log('Hola mundo')

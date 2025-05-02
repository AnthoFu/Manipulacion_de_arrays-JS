const Input =
    [
        'amor',
        'sol',
        'piedra',
        'día'
    ]

const app1 = document.getElementById('app1')

const filtrarPalabras = Input.filter(item => item.length >= 4)

app1.innerHTML =
    `
        <ul>
            <li><strong>Original:</strong> ${Input.map(item =>
        `<span>${item}</span>`
    ).join(', ')}</li>
            
            <li><strong>Resultado:</strong> Palabras menores de 4 letras: (${filtrarPalabras.join(', ')})</li>
        </ul>
`
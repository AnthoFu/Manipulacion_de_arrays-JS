const array_1 = ['ana', 'santi', 'nico', 'anastasia']
const term_1 = 'ana'

const array_2 = ['ana', 'santi', 'nico', 'anastasia']
const term_2 = 'xyz'

const filtradoSuperProDeAnthony = (array, term) => {
    return array.filter(name => name.includes(term))
}

console.log('[Output 1]:', filtradoSuperProDeAnthony(array_1, term_1))
console.log('[Output 2]:', filtradoSuperProDeAnthony(array_2, term_2))
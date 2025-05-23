const productos = [
    {titulo: "Pizza", precio: 121, id:1},
    {titulo: "Hamburguesa", precio: 121, id:2},
    {titulo: "Panquecas", precio: 121, id:3},
];

const misProductos = []

console.log('[Productos]:',productos);
console.log('[Mis productos]:',misProductos);
console.log('-'.repeat(50));

const producto = productos.find(item => item.id === 1); // Busca el producto con id 1
if (producto) {
    misProductos.push(producto); // Si lo encuentra, lo agrega al array de mis productos
    // Push es un método mutable que modifica el array original
    console.log('[Mis productos]:',misProductos);

    
    
}

const productoIndex = productos.findIndex(item => item.id === 3); // Busca el índice del producto con id 3
// FindIndex devuelve el índice del primer elemento que cumple con la condición
// Si no lo encuentra, devuelve -1
// FindIndex es un método inmutable que no modifica el array original
if (productoIndex !== -1) {
    misProductos.push(productos[productoIndex]); // Si lo encuentra, lo agrega al array de mis productos
    // Eliminar el producto recién agregado de misProductos usando el último índice
    console.log('[Agregar Panquecas]:',misProductos);   

    productos.splice(productoIndex, 1); // Elimina el último producto agregado
    // Splice es un método mutable que modifica el array original
    // El primer parámetro es el índice del elemento a eliminar y el segundo es la cantidad de elementos a eliminar
    console.log('[Borrar panquecas de productos]:',productos);
}

// Update
const productosV2 = [
    {titulo: "Pizza", precio: 121, id:1},
    {titulo: "Hamburguesa", precio: 121, id:2},
    {titulo: "Panquecas", precio: 121, id:3},
];

const update = {
    id: 1,
    cambios: {
        precio: 200,
        descripcion: "Pizza con ingredientes deliciosos"
    }
}

const productoIndexV2 = productosV2.findIndex(item => item.id === update.id); // Busca el índice del producto con id 1
// // Si no lo encuentra, devuelve -1
// console.log('Producto a modificar:',productosV2[productoIndexV2]);
// productosV2[productoIndexV2] = update.cambios; // Modifica el producto en el array
// console.log('Producto modificado:',productosV2[productoIndexV2]);
// Esta forma es incorrecta porque no se está modificando el producto original
// Se debe usar el operador de propagación para crear un nuevo objeto con las propiedades del producto original y las propiedades del objeto de cambios

productosV2[productoIndexV2] = {
    ...productosV2[productoIndexV2],
    ...update.cambios
};
console.log('Producto modificado:',productosV2[productoIndexV2]);

// Retos: 1
// Eliminar un elemento sin borrarlo de la lista original
const productosV3 = [
    {titulo: "Pizza", precio: 121, id:1},
    {titulo: "Hamburguesa", precio: 121, id:2},
    {titulo: "Panquecas", precio: 121, id:3},
];

const resultado_reto1 = productosV3.filter(producto => producto.id !== 1); // Filtra el array de productos y devuelve un nuevo array sin el producto con id 1
console.log('Resultado reto 1:',resultado_reto1);
// El array original no se modifica
console.log('Array original:',productosV3);

// Retos: 2
// Modificar un array sin modificar el original

const productosV4 = [
    {titulo: "Pizza", precio: 121, id:1},
    {titulo: "Hamburguesa", precio: 121, id:2},
    {titulo: "Panquecas", precio: 121, id:3},
];

const cambioHamburguesa ={
    id: 2,
    cambios: {
        precio: 350,
        descripcion: "Hamburguesa deliciosa"
    }
}
const resultado_reto2 = productosV4.findIndex(item => item.id === cambioHamburguesa.id);
const productosModificados = [...productosV4]; // Crea una copia del array original
productosModificados[resultado_reto2] = {
    ...productosModificados[resultado_reto2],
    ...cambioHamburguesa.cambios
}; // Modifica el producto en la copia del array
console.log('Resultado reto 2:',productosModificados);
// El array original no se modifica
console.log('Array original:',productosV4);
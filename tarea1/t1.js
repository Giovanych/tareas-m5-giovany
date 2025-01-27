//#1
let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 301 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 401 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 351 }
];
console.log(`Nombre: ${libros[1].titulo}, Autor: ${libros[1].autor}`);
libros[0].paginas = 350;
console.log(libros[0]);


let librosSimplificados = libros.map(libro => {
    return {
        titulo: libro.titulo,
        autor: libro.autor
    };
});
console.log(librosSimplificados);


//#2
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let sumaEdades = 0;
for (let i = 0; i < estudiantes.length; i++) {
    sumaEdades += estudiantes[i].edad;
}

let promedioEdad = sumaEdades / estudiantes.length;
console.log(`Suma de las edades: ${sumaEdades}`);
console.log(`Promedio de edad: ${promedioEdad.toFixed(2)}`); 


//#3
let productoEncontrado = productos.find(producto => producto.nombre === 'Computadora');
console.log(productoEncontrado);

let productosRopa = productos.filter(producto => producto.categoria === 'Ropa');
console.log(productosRopa);

let productosCaros = productos.filter(producto => producto.precio > 100);
console.log(productosCaros);

let nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);


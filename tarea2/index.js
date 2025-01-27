console.log("hola")
import Chance from 'chance';

const chance = new Chance();

const nombre = chance.name();
const correo = chance.email();
const fechaNacimiento = chance.birthday();
const telefono = chance.phone();
const cumpleanos = chance.birthday();
const direccion = chance.address();
const datoAleatorio = chance.sentence();

console.log("Datos aleatorios generados:");
console.log("Nombre:", nombre);
console.log("Correo electrónico:", correo);
console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleDateString());
console.log("Teléfono:", telefono);
console.log("Cumpleaños:", cumpleanos.toLocaleDateString());
console.log("Dirección:", direccion);
console.log("Dato aleatorio:", datoAleatorio);

import { writeFile } from 'fs';

const numeros = [];
for (let i = 1; i <= 1000; i++) {
    numeros.push(i);
}

const data = numeros.join('\n');

writeFile('numeros.txt', data, (err) => {
    if (err) throw err;
    console.log('El archivo numeros.txt ha sido creado con éxito.');
});

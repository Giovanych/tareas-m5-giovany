import { readFile, writeFile } from 'fs';

readFile('numeros.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const lines = data.split('\n');

    const evenNumbers = lines.filter(line => {
        const numero = parseInt(line, 10);
        return numero % 2 === 0;
    });

    console.log('Números pares:', evenNumbers.join(', '));

    const evenNumbersData = evenNumbers.join('\n');
    writeFile('numeros-pares.txt', evenNumbersData, (err) => {
        if (err) throw err;
        console.log('El archivo numeros-pares.txt ha sido creado con éxito.');
    });
});

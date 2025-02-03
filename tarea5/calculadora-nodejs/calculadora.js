// Suma
function suma(a, b) {
    return a + b;
}

// Resta
function resta(a, b) {
    return a - b;
}

// Multiplición
function multiplicacion(a, b) {
    return a * b;
}

// División 
function division(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    }
    return a / b;
}
// Función principal que recibe los argumentos de línea de comandos y ejecuta la operación correspondiente
function calculadora() {
    const args = process.argv.slice(2);
    const num1 = parseFloat(args[0]);
    const operacion = args[1];
    const num2 = parseFloat(args[2]);

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Error: Los argumentos deben ser números');
        return;
    }

    let resultado;
    switch (operacion) {
        case '+':
            resultado = suma(num1, num2);
            break;
        case '-':
            resultado = resta(num1, num2);
            break;
        case '*':
            resultado = multiplicacion(num1, num2);
            break;
        case ':':
            resultado = division(num1, num2);
            break;
        default:
            console.log('Error: Operación no reconocida');
            return;
    }

    console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
}

// Llamada a la función principal
calculadora();
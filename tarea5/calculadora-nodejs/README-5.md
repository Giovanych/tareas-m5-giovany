# 📖 Documentación de la Calculadora en Node.js

## 📌 Descripción
Esta es una calculadora simple implementada en JavaScript y ejecutada mediante Node.js. Permite realizar operaciones básicas como suma, resta, multiplicación y división a través de la línea de comandos.

---

## 🚀 Instalación y Ejecución
### 🔧 Requisitos
- Tener [Node.js](https://nodejs.org/) instalado en tu sistema.

### ▶️ Uso
Ejecuta el siguiente comando en la terminal:
```sh
node calculadora.js <número1> <operador> <número2>
```
Donde:
- `<número1>` y `<número2>` son los operandos (números con los que se va a operar).
- `<operador>` es el símbolo de la operación que deseas realizar.

### 📌 Ejemplo de uso
```sh
node calculadora.js 10 + 5
```
Salida esperada:
```sh
El resultado de 10 + 5 es: 15
```

---

## ⚡ Funcionalidades y Operadores Admitidos
| Operación      | Símbolo |
|---------------|---------|
| Suma          | `+`     |
| Resta         | `-`     |
| Multiplicación | `*`     |
| División      | `:`     |

📌 **Nota:** Para la división, se utiliza `:` en lugar de `/` debido a cómo algunos sistemas manejan el operador `/` en la terminal. En algunos entornos de línea de comandos, el `/` puede ser interpretado como parte de una ruta de archivo o un argumento especial, lo que causa errores al procesar la operación de división. Para evitar estos problemas de interpretación, se decidió utilizar `:` como alternativa.

---

## 📜 Explicación del Código

### 1️⃣ **Funciones matemáticas**
```js
// Suma
function suma(a, b) {
    return a + b;
}

// Resta
function resta(a, b) {
    return a - b;
}

// Multiplicación
function multiplicacion(a, b) {
    return a * b;
}

// División con control de error por división entre cero
function division(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    }
    return a / b;
}
```
Estas funciones realizan cada operación matemática y devuelven el resultado.

### 2️⃣ **Función principal: `calculadora()`**
```js
function calculadora() {
    const args = process.argv.slice(2); // Obtiene los argumentos desde la terminal
    const num1 = parseFloat(args[0]);  // Primer número
    const operacion = args[1];          // Operador matemático
    const num2 = parseFloat(args[2]);  // Segundo número
```
📌 `process.argv` obtiene los argumentos de la línea de comandos.

- Se extraen los números y el operador ingresados.
- `parseFloat()` convierte los valores de texto a números decimales.

#### 🛑 **Validación de los argumentos**
```js
    if (isNaN(num1) || isNaN(num2)) {
        console.log('Error: Los argumentos deben ser números');
        return;
    }
```
📌 Si los argumentos no son números, se muestra un mensaje de error y se detiene la ejecución.

#### 🔄 **Estructura `switch` para realizar la operación**
```js
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
```
📌 Se verifica qué operador ingresó el usuario y se llama a la función correspondiente.

#### 📢 **Mostrar el resultado en la terminal**
```js
    console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
}
```
📌 Imprime el resultado en la consola.

---

## 🛠 Posibles Errores y Soluciones
| Error | Causa | Solución |
|-------|-------|----------|
| `Error: Los argumentos deben ser números` | Se ingresó un valor no numérico | Asegurar que los argumentos sean números. |
| `Error: Operación no reconocida` | Se ingresó un operador no válido | Usar solo los operadores admitidos (`+`, `-`, `*`, `:`). |
| `Error: División por cero` | Se intentó dividir entre 0 | Asegurar que el segundo número sea diferente de 0. |

---

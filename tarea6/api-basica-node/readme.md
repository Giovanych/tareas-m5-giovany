# API Básica con Node.js

Este proyecto implementa una API básica utilizando `Node.js` y el módulo `http`. La API permite realizar operaciones CRUD simples sobre una lista de productos almacenados en un archivo JSON llamado `products.json`.

---

 **Accede al directorio del proyecto:**

   ```bash
   cd <directorio-del-proyecto>
   ```

1. **Crea el archivo `products.json` en el directorio raíz con el siguiente contenido inicial:**

   ```json
   [
       { "id": 1, "name": "Laptop", "price": 999.99, "category": "Electronics" },
       { "id": 2, "name": "Chair", "price": 49.99, "category": "Furniture" },
       { "id": 3, "name": "Pen", "price": 1.99, "category": "Stationery" }
   ]
   ```

2. **Ejecuta el servidor:**

   ```bash
   node server.js
   ```

3. **Accede al servidor desde tu navegador o Postman:**

   - URL base: `http://localhost:3002`

---

## Uso de la API

### **GET /products**

Obtiene la lista completa de productos.

- **Método:** `GET`
- **URL:** `/products`
- **Respuesta Exitosa (200):**
  
  ```json
  [
      { "id": 1, "name": "Laptop", "price": 999.99, "category": "Electronics" },
      { "id": 2, "name": "Chair", "price": 49.99, "category": "Furniture" },
      { "id": 3, "name": "Pen", "price": 1.99, "category": "Stationery" }
  ]
  ```

---

### **POST /products**

Agrega un nuevo producto a la lista.

- **Método:** `POST`
- **URL:** `/products`
- **Headers:**
  - `Content-Type: application/json`
- **Cuerpo del Request:**

  ```json
  {
      "name": "Notebook",
      "price": 4.99,
      "category": "Stationery"
  }
  ```

- **Respuesta Exitosa (201):**

  ```json
  {
      "message": "Producto agregado",
      "product": {
          "id": 4,
          "name": "Notebook",
          "price": 4.99,
          "category": "Stationery"
      }
  }
  ```

---

## Estructura del Proyecto

```plaintext
tarea6/
├── server.js          # Archivo principal con el servidor
├── products.json      # Base de datos de productos
└── README.md          # Documentación del proyecto
```

---

## Archivo JSON

El archivo `products.json` actúa como una base de datos para almacenar los productos. Se actualiza automáticamente cada vez que se agrega un producto nuevo mediante la API.

Ejemplo del archivo después de agregar un producto:

```json
[
    { "id": 1, "name": "Laptop", "price": 999.99, "category": "Electronics" },
    { "id": 2, "name": "Chair", "price": 49.99, "category": "Furniture" },
    { "id": 3, "name": "Pen", "price": 1.99, "category": "Stationery" },
    { "id": 4, "name": "Notebook", "price": 4.99, "category": "Stationery" }
]
```

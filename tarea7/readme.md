# API de Estudiantes con Express

## 📌 Descripción

Esta API permite gestionar un listado de estudiantes, permitiendo obtener, crear, actualizar y eliminar estudiantes mediante métodos HTTP. Se utiliza **Node.js** con **Express** y un archivo `students.json` como base de datos.

---

## 🚀 Ejecución

```sh
 node server.js
```

El servidor se ejecutará en: `http://localhost:3002`

URL base: `http://localhost:3002/students`

---

## 📌 Endpoints de la API

### 🟢 **1. Obtener todos los estudiantes**

- **Método:** `GET`
- **URL:** `/students`

---

### 🟢 **2. Obtener un estudiante por ID**

- **Método:** `GET`
- **URL:** `/students/:id`
- **Ejemplo:** `/students/2`

---

### 🟢 **3. Crear un nuevo estudiante**

- **Método:** `POST`
- **URL:** `/students`
- **Body:** (JSON)
  ```json
  {
    "name": "David",
    "age": 23,
    "major": "Engineering"
  }
  ```
---

### 🟢 **4. Actualizar un estudiante**

- **Método:** `PUT`
- **URL:** `/students/:id`
- **Body:** (Solo los campos a actualizar)
  ```json
  {
    "age": 24,
    "major": "Data Science"
  }
  ```

---

### 🟢 **5. Eliminar un estudiante**

- **Método:** `DELETE`
- **URL:** `/students/:id`
- **Ejemplo:** `/students/2`

---

## 📸 Evidencia de pruebas en Postman

A continuación, se presentan capturas de pantalla de las pruebas realizadas en Postman para verificar el correcto funcionamiento de la API:

### 🔹 **Prueba GET /students**
![alt text](<metodo GET.jpg>)

### 🔹 **Prueba GET /students/:id**
![alt text](<GET por ID.jpg>)

### 🔹 **Prueba POST /students**
![alt text](<Metodo POST.jpg>)

### 🔹 **Prueba PUT /students/:id**
![alt text](<metodo PUT.jpg>)

### 🔹 **Prueba DELETE /students/:id**
![alt text](<metodo DELETE.jpg>)


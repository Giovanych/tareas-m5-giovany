# Tarea 7: Crear una API Básica con Express

## Descripción
En esta tarea se desarrolló una API que gestiona una lista de estudiantes utilizando Express como framework de Node.js. La API opera en el puerto 3002 y permite realizar operaciones básicas como obtener todos los estudiantes, obtener un estudiante por ID y eliminar un estudiante.

### Funcionalidades principales

1. **GET /students**
   - Este endpoint retorna la lista completa de estudiantes en formato JSON.
   - Los datos de los estudiantes se obtienen de un archivo JSON llamado `students.json`.

2. **GET /students/:id**
   - Este endpoint retorna la información de un estudiante específico basado en su ID.
   - Si no se encuentra un estudiante con el ID proporcionado, se devuelve un mensaje de error con un código de estado 404.

3. **DELETE /students/:id**
   - Este endpoint permite eliminar un estudiante específico de la lista basado en su ID.
   - Si el estudiante no existe, se retorna un mensaje de error con un código de estado 404.
   - Al eliminar un estudiante, los cambios se guardan de manera persistente en el archivo `students.json`.

### Estructura del proyecto
- **server.js**: Contiene el código principal del servidor y la lógica para manejar las solicitudes HTTP.
- **students.json**: Archivo JSON que sirve como base de datos para almacenar la información de los estudiantes.

### Ejemplo del archivo `students.json`
```json
[
    { "id": 1, "name": "Alice", "age": 20, "major": "Computer Science" },
    { "id": 2, "name": "Bob", "age": 22, "major": "Mathematics" },
    { "id": 3, "name": "Charlie", "age": 21, "major": "Physics" }
]
```

### Código relevante
#### Leer los datos del archivo JSON
```javascript
const readStudentsFromFile = () => {
    try {
        const data = fs.readFileSync(filePath, "utf8").trim();
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.error("Error leyendo el archivo students.json:", err.message);
        return [];
    }
};
```

#### Escribir datos en el archivo JSON
```javascript
const writeStudentsToFile = (students) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(students, null, 2));
    } catch (err) {
        console.error("Error escribiendo en el archivo students.json:", err);
    }
};
```

#### Endpoint DELETE /students/:id
```javascript
app.delete('/students/:id', (req, res) => {
    const students = readStudentsFromFile();
    const studentId = parseInt(req.params.id);

    const filteredStudents = students.filter(s => s.id !== studentId);

    if (filteredStudents.length === students.length) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    writeStudentsToFile(filteredStudents);
    res.json({ message: "Estudiante eliminado correctamente" });
});
```


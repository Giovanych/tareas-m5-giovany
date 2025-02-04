const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3002;

app.use(express.json());

const filePath = path.join(__dirname, "students.json");

const readStudentsFromFile = () => {
    try {
        const data = fs.readFileSync(filePath, "utf8").trim();
        console.log("Contenido del archivo JSON:", data); 
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.error("Error leyendo el archivo students.json:", err.message);
        return [];
    }
};

const writeStudentsToFile = (students) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(students, null, 2));
    } catch (err) {
        console.error("Error escribiendo en el archivo students.json:", err);
    }
};

// Endpoint GET
app.get('/students', (req, res) => {
    const students = readStudentsFromFile();
    res.json(students);
});

// Endpoint GET 
app.get('/students/:id', (req, res) => {
    const students = readStudentsFromFile();
    const student = students.find(s => s.id === parseInt(req.params.id));

    if (!student) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    res.json(student);
});

// Endpoint DELETE - Eliminar un estudiante
app.delete('/students/:id', (req, res) => {
    const students = readStudentsFromFile();
    const studentId = parseInt(req.params.id);

    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex === -1) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    // Eliminar estudiante
    students.splice(studentIndex, 1);

    writeStudentsToFile(students);

    res.json({ message: "Estudiante eliminado correctamente" });
});


// Endpoint POST - Agregar un nuevo estudiante
app.post('/students', (req, res) => {
    const students = readStudentsFromFile();
    const { name, age, major } = req.body;

    if (!name || !age || !major) {
        return res.status(400).json({ message: "Todos los campos (name, age, major) son obligatorios." });
    }

    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    const newStudent = { id: newId, name, age, major };
    students.push(newStudent);
    writeStudentsToFile(students);

    res.status(201).json(newStudent);
});

// Endpoint PUT - Actualizar datos de un estudiante
app.put('/students/:id', (req, res) => {
    const students = readStudentsFromFile();
    const studentId = parseInt(req.params.id);
    const { name, age, major } = req.body;

    const studentIndex = students.findIndex(s => s.id === studentId);
    
    if (studentIndex === -1) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    // Actualizar solo los campos proporcionados en la petición
    if (name) students[studentIndex].name = name;
    if (age) students[studentIndex].age = age;
    if (major) students[studentIndex].major = major;

    writeStudentsToFile(students);

    res.json({ message: "Estudiante actualizado", student: students[studentIndex] });
});

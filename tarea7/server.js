const authMiddleware = require("./middlewares/authMiddleware");
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

    // Endpoint DELETE 
app.delete("/students/:id", authMiddleware, (req, res) => {
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

const validationMiddleware = require('./middlewares/validationMiddleware');

// Endpoint POST. crear estudiante
app.post("/students", authMiddleware, validationMiddleware, (req, res) => {
    const students = readStudentsFromFile();
    const { name, age, major } = req.body;

    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    const newStudent = { id: newId, name, age, major };
    students.push(newStudent);
    writeStudentsToFile(students);

    res.status(201).json(newStudent);
});
// Endpoint PUT actualizar estudiante
app.put("/students/:id", authMiddleware, validationMiddleware, (req, res) => {
    const students = readStudentsFromFile();
    const studentId = parseInt(req.params.id);

    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex === -1) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    const { name, age, major } = req.body;

    if (name !== undefined) students[studentIndex].name = name;
    if (age !== undefined) students[studentIndex].age = age;
    if (major !== undefined) students[studentIndex].major = major;

    writeStudentsToFile(students);

    res.json({ message: "Estudiante actualizado", student: students[studentIndex] });
});



app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

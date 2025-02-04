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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

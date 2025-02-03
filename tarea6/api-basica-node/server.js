const http = require("http");
const fs = require("fs");

const PORT = 3002; // Cambia al puerto que estás usando

// Función para leer el archivo JSON
const readProductsFromFile = () => {
    try {
        const data = fs.readFileSync("products.json", "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error leyendo el archivo products.json:", err);
        return [];
    }
};

// Función para escribir en el archivo JSON
const writeProductsToFile = (products) => {
    try {
        fs.writeFileSync("products.json", JSON.stringify(products, null, 2));
    } catch (err) {
        console.error("Error escribiendo en el archivo products.json:", err);
    }
};

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/products") {
        const products = readProductsFromFile();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products));
    } else if (req.method === "POST" && req.url === "/products") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                const newProduct = JSON.parse(body);
                const products = readProductsFromFile();

                // Generar un nuevo ID
                newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;

                products.push(newProduct);
                writeProductsToFile(products);

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "Producto agregado",
                        product: newProduct,
                    })
                );
            } catch (err) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Error en el formato del producto" }));
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Ruta no encontrada" }));
    }
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({ message: "Acceso prohibido: encabezado de autorización ausente" });
    }
    
    const [prefix, token] = authHeader.split(" ");

    if (prefix !== "Bearer" || token !== "mysecrettoken") {
        return res.status(403).json({ message: "Acceso prohibido: token inválido" });
    }

    next(); 
};

module.exports = authMiddleware;

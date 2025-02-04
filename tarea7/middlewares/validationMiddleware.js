const validationMiddleware = (req, res, next) => {
    const { name, age, major } = req.body;

    if (name !== undefined && (typeof name !== 'string' || name.trim() === '')) {
        return res.status(400).json({ message: "Invalid name. Name must be a non-empty string." });
    }
    
    if (age !== undefined) {
        if (typeof age !== 'number' || age < 0) {
            return res.status(400).json({ message: "Invalid age. Age must be a non-negative number." });
        }
    }
    
    if (major !== undefined && (typeof major !== 'string' || major.trim() === '')) {
        return res.status(400).json({ message: "Invalid major. Major must be a non-empty string." });
    }

    next();
};

module.exports = validationMiddleware;

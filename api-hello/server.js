const express = require("express");

const app = express();
const PORT = 3000;

// Endpoint GET /hello
app.get("/hello", (req, res) => {
    res.json({ message: "API REST com Node.js funcionando!" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
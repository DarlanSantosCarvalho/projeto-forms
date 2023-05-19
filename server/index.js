const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Escanor2200@",
    database: "dados"
});

app.use(express.json());
app.use(cors())

app.post("/", (req, res) => {
    const inspetor = req.body.inspetor
})



app.listen(3000, () => {
    console.log("Rodando na porta 3000");
});

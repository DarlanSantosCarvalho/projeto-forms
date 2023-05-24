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
    const inspetorUm = req.body.tecnicoUm;
    const inspetorDois = req.body.tecnicoDois
    const date = req.body.date;
    const setor = req.body.setor;
    const timeStart = req.body.timeStart;
    const timeEnd = req.body.timeEnd;
    const equip1_1 = req.body.equip1_1;
    const equip1_2 = req.body.equip1_2;
    const equip1_3 = req.body.equip1_3;
    const equip1_4 = req.body.equip1_4;
    const equip1_5 = req.body.equip1_5;
    const equip1_6 = req.body.equip1_6;
    const equip2_1 = req.body.equip2_1;
    const equip2_2 = req.body.equip2_2;
    const equip2_3 = req.body.equip2_3;
    const equip2_4 = req.body.equip2_4;
    const equip2_5 = req.body.equip2_5;
    const equip2_6 = req.body.equip2_6;


    db.query("SELECT * FROM usuarios WHERE data = ?", [date], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length === 0) {
            db.query("INSERT INTO usuarios (inspetor, data, setor, timeStart, timeEnd, equip1_1, equip1_2, equip1_3, equip1_4, equip1_5, equip1_6, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip2_6, inspetor2 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [inspetorUm, date, setor, timeStart, timeEnd, equip1_1, equip1_2, equip1_3, equip1_4, equip1_5, equip1_6, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip2_6, inspetorDois],
                (err) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send("Dados inseridos com sucesso!");
                    }
                });
        }
    });

})



app.listen(3000, () => {
    console.log("Rodando na porta 3000");
});

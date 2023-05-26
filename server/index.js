const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

const pediatriaA = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Escanor2200@",
    database: "dados"
});

const pediatriaB = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Escanor2200@",
    database: "dados"
});

const pediatriaC = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Escanor2200@",
    database: "dados"
});

const utiNeo = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Escanor2200@",
    database: "dados"
});


app.use(express.json());
app.use(cors())

//APP POST /UTI PEDIATRIA A

app.post("/UTIA", (req, res) => {
    const inspetorUm = req.body.tecnicoUm;
    const inspetorDois = req.body.tecnicoDois
    const date = req.body.date;
    const setor = req.body.setor;
    const timeStart = req.body.timeStart;
    const timeEnd = req.body.timeEnd;
    const obs = req.body.obs;
    const assinatura = req.body.assinatura
    const equip1_1 = req.body.equip1_1
    const equip1_2 = req.body.equip1_2;
    const equip1_3 = req.body.equip1_3;
    const equip2_1 = req.body.equip2_1;
    const equip2_2 = req.body.equip2_2;
    const equip2_3 = req.body.equip2_3;
    const equip2_4 = req.body.equip2_4;
    const equip2_5 = req.body.equip2_5;
    const equip3_1 = req.body.equip3_1;
    const equip3_2 = req.body.equip3_2;
    const equip3_3 = req.body.equip3_3;
    const equip3_4 = req.body.equip3_4;
    const equip4_1 = req.body.equip4_1;
    const equip4_2 = req.body.equip4_2;
    const equip4_3 = req.body.equip4_3;
    const equip4_4 = req.body.equip4_4;
    const equip5_1 = req.body.equip5_1;
    const equip5_2 = req.body.equip5_2;
    const equip5_3 = req.body.equip5_3;
    const equip6_1 = req.body.equip6_1;
    const equip6_2 = req.body.equip6_2;
    const equip6_3 = req.body.equip6_3;
    const equip6_4 = req.body.equip6_4;
    const equip6_5 = req.body.equip6_5;
    const equip7_1 = req.body.equip7_1;
    const equip7_2 = req.body.equip7_2;
    const equip7_3 = req.body.equip7_3;
    const equip7_4 = req.body.equip7_4;
    const equip8_1 = req.body.equip8_1;
    const equip8_2 = req.body.equip8_2;
    const equip8_3 = req.body.equip8_3;
    const equip9_1 = req.body.equip9_1;
    const equip9_2 = req.body.equip9_2;
    const equip10_1 = req.body.equip10_1;
    const equip10_2 = req.body.equip10_2;




    pediatriaA.query("SELECT * FROM utia WHERE data = ?", [date], (err, result) => {
        if (err) {
            res.send(err);
            return;
        }

        if (result.length === 0) {
            pediatriaA.query("INSERT INTO utia (inspetor, inspetor2, data, setor, timeStart, timeEnd, equip1_1, equip1_2, equip1_3, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip3_1, equip3_2, equip3_3, equip3_4, equip4_1, equip4_2, equip4_3, equip4_4, equip5_1, equip5_2, equip5_3, equip6_1, equip6_2, equip6_3, equip6_4, equip6_5, equip7_1, equip7_2, equip7_3, equip7_4, equip8_1, equip8_2, equip8_3, equip9_1, equip9_2, equip10_1, equip10_2, Obs, Assinatura) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [inspetorUm, inspetorDois, date, setor, timeStart, timeEnd, equip1_1, equip1_2, equip1_3, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip3_1, equip3_2, equip3_3, equip3_4, equip4_1, equip4_2, equip4_3, equip4_4, equip5_1, equip5_2, equip5_3, equip6_1, equip6_2, equip6_3, equip6_4, equip6_5, equip7_1, equip7_2, equip7_3, equip7_4, equip8_1, equip8_2, equip8_3, equip9_1, equip9_2, equip10_1, equip10_2, obs, assinatura],
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


//APP POST /UTI PEDIATRIA B

app.post("/UTIB", (req, res) => {
    const inspetorUm = req.body.tecnicoUm;
    const inspetorDois = req.body.tecnicoDois
    const date = req.body.date;
    const setor = req.body.setor;
    const timeStart = req.body.timeStart;
    const timeEnd = req.body.timeEnd;
    const obs = req.body.obs;
    const assinatura = req.body.assinatura
    const equip1_1 = req.body.equip1_1
    const equip1_2 = req.body.equip1_2;
    const equip1_3 = req.body.equip1_3;
    const equip2_1 = req.body.equip2_1;
    const equip2_2 = req.body.equip2_2;
    const equip2_3 = req.body.equip2_3;
    const equip2_4 = req.body.equip2_4;
    const equip2_5 = req.body.equip2_5;
    const equip3_1 = req.body.equip3_1;
    const equip3_2 = req.body.equip3_2;
    const equip3_3 = req.body.equip3_3;
    const equip3_4 = req.body.equip3_4;
    const equip4_1 = req.body.equip4_1;
    const equip4_2 = req.body.equip4_2;
    const equip4_3 = req.body.equip4_3;
    const equip4_4 = req.body.equip4_4;
    const equip5_1 = req.body.equip5_1;
    const equip5_2 = req.body.equip5_2;
    const equip5_3 = req.body.equip5_3;
    const equip6_1 = req.body.equip6_1;
    const equip6_2 = req.body.equip6_2;
    const equip6_3 = req.body.equip6_3;
    const equip6_4 = req.body.equip6_4;
    const equip6_5 = req.body.equip6_5;
    const equip7_1 = req.body.equip7_1;
    const equip7_2 = req.body.equip7_2;
    const equip7_3 = req.body.equip7_3;
    const equip7_4 = req.body.equip7_4;
    const equip8_1 = req.body.equip8_1;
    const equip8_2 = req.body.equip8_2;
    const equip8_3 = req.body.equip8_3;
    const equip9_1 = req.body.equip9_1;
    const equip9_2 = req.body.equip9_2;
    const equip10_1 = req.body.equip10_1;
    const equip10_2 = req.body.equip10_2;




    pediatriaB.query("SELECT * FROM utib WHERE data = ?", [date], (err, result) => {
        if (err) {
            res.send(err);
            return;
        }

        if (result.length === 0) {
            pediatriaB.query("INSERT INTO utib (inspetor, inspetor2, data, setor, timeStart, timeEnd, equip1_1, equip1_2, equip1_3, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip3_1, equip3_2, equip3_3, equip3_4, equip4_1, equip4_2, equip4_3, equip4_4, equip5_1, equip5_2, equip5_3, equip6_1, equip6_2, equip6_3, equip6_4, equip6_5, equip7_1, equip7_2, equip7_3, equip7_4, equip8_1, equip8_2, equip8_3, equip9_1, equip9_2, equip10_1, equip10_2, Obs, Assinatura) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [inspetorUm, inspetorDois, date, setor, timeStart, timeEnd, equip1_1, equip1_2, equip1_3, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip3_1, equip3_2, equip3_3, equip3_4, equip4_1, equip4_2, equip4_3, equip4_4, equip5_1, equip5_2, equip5_3, equip6_1, equip6_2, equip6_3, equip6_4, equip6_5, equip7_1, equip7_2, equip7_3, equip7_4, equip8_1, equip8_2, equip8_3, equip9_1, equip9_2, equip10_1, equip10_2, obs, assinatura],
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

//APP POST /UTI PEDIATRIA C


app.post("/UTIC", (req, res) => {
    const inspetorUm = req.body.tecnicoUm;
    const inspetorDois = req.body.tecnicoDois
    const date = req.body.date;
    const setor = req.body.setor;
    const timeStart = req.body.timeStart;
    const timeEnd = req.body.timeEnd;
    const obs = req.body.obs;
    const assinatura = req.body.assinatura
    const equip1_1 = req.body.equip1_1
    const equip1_2 = req.body.equip1_2;
    const equip1_3 = req.body.equip1_3;
    const equip2_1 = req.body.equip2_1;
    const equip2_2 = req.body.equip2_2;
    const equip2_3 = req.body.equip2_3;
    const equip2_4 = req.body.equip2_4;
    const equip2_5 = req.body.equip2_5;
    const equip3_1 = req.body.equip3_1;
    const equip3_2 = req.body.equip3_2;
    const equip3_3 = req.body.equip3_3;
    const equip3_4 = req.body.equip3_4;
    const equip4_1 = req.body.equip4_1;
    const equip4_2 = req.body.equip4_2;
    const equip4_3 = req.body.equip4_3;
    const equip4_4 = req.body.equip4_4;
    const equip5_1 = req.body.equip5_1;
    const equip5_2 = req.body.equip5_2;
    const equip5_3 = req.body.equip5_3;
    const equip6_1 = req.body.equip6_1;
    const equip6_2 = req.body.equip6_2;
    const equip7_1 = req.body.equip7_1;
    const equip7_2 = req.body.equip7_2;




    pediatriaC.query("SELECT * FROM utic WHERE data = ?", [date], (err, result) => {
        if (err) {
            res.send(err);
            return;
        }

        if (result.length === 0) {
            pediatriaC.query("INSERT INTO utic (inspetor, inspetor2, data, setor, timeStart, timeEnd, equip1_1, equip1_2, equip1_3, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip3_1, equip3_2, equip3_3, equip3_4, equip4_1, equip4_2, equip4_3, equip4_4, equip5_1, equip5_2, equip5_3, equip6_1, equip6_2, equip7_1, equip7_2, Obs, Assinatura) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [inspetorUm, inspetorDois, date, setor, timeStart, timeEnd, equip1_1, equip1_2, equip1_3, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip3_1, equip3_2, equip3_3, equip3_4, equip4_1, equip4_2, equip4_3, equip4_4, equip5_1, equip5_2, equip5_3, equip6_1, equip6_2, equip7_1, equip7_2, obs, assinatura],
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

//APP POST /UTI PEDIATRIA C

app.post("/UTINEO", (req, res) => {
    const inspetorUm = req.body.tecnicoUm;
    const inspetorDois = req.body.tecnicoDois
    const date = req.body.date;
    const setor = req.body.setor;
    const timeStart = req.body.timeStart;
    const timeEnd = req.body.timeEnd;
    const obs = req.body.obs;
    const assinatura = req.body.assinatura
    const equip1_1 = req.body.equip1_1
    const equip1_2 = req.body.equip1_2;
    const equip1_3 = req.body.equip1_3;
    const equip2_1 = req.body.equip2_1;
    const equip2_2 = req.body.equip2_2;
    const equip2_3 = req.body.equip2_3;
    const equip2_4 = req.body.equip2_4;
    const equip2_5 = req.body.equip2_5;
    const equip3_1 = req.body.equip3_1;
    const equip3_2 = req.body.equip3_2;
    const equip3_3 = req.body.equip3_3;
    const equip3_4 = req.body.equip3_4;
    const equip4_1 = req.body.equip4_1;
    const equip4_2 = req.body.equip4_2;
    const equip4_3 = req.body.equip4_3;
    const equip4_4 = req.body.equip4_4;
    const equip5_1 = req.body.equip5_1;
    const equip5_2 = req.body.equip5_2;
    const equip5_3 = req.body.equip5_3;
    const equip6_1 = req.body.equip6_1;
    const equip6_2 = req.body.equip6_2;
    const equip6_3 = req.body.equip6_3;
    const equip6_4 = req.body.equip6_4;
    const equip6_5 = req.body.equip6_5;
    const equip7_1 = req.body.equip7_1;
    const equip7_2 = req.body.equip7_2;
    const equip7_3 = req.body.equip7_3;
    const equip7_4 = req.body.equip7_4;
    const equip8_1 = req.body.equip8_1;
    const equip8_2 = req.body.equip8_2;
    const equip8_3 = req.body.equip8_3;
    const equip9_1 = req.body.equip9_1;
    const equip9_2 = req.body.equip9_2;
    const equip10_1 = req.body.equip10_1;
    const equip10_2 = req.body.equip10_2;




    utiNeo.query("SELECT * FROM utineo WHERE data = ?", [date], (err, result) => {
        if (err) {
            res.send(err);
            return;
        }

        if (result.length === 0) {
            utiNeo.query("INSERT INTO utineo (inspetor, inspetor2, data, setor, timeStart, timeEnd, equip1_1, equip1_2, equip1_3, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip3_1, equip3_2, equip3_3, equip3_4, equip4_1, equip4_2, equip4_3, equip4_4, equip5_1, equip5_2, equip5_3, equip6_1, equip6_2, equip6_3, equip6_4, equip6_5, equip7_1, equip7_2, equip7_3, equip7_4, equip8_1, equip8_2, equip8_3, equip9_1, equip9_2, equip10_1, equip10_2, Obs, Assinatura) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [inspetorUm, inspetorDois, date, setor, timeStart, timeEnd, equip1_1, equip1_2, equip1_3, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip3_1, equip3_2, equip3_3, equip3_4, equip4_1, equip4_2, equip4_3, equip4_4, equip5_1, equip5_2, equip5_3, equip6_1, equip6_2, equip6_3, equip6_4, equip6_5, equip7_1, equip7_2, equip7_3, equip7_4, equip8_1, equip8_2, equip8_3, equip9_1, equip9_2, equip10_1, equip10_2, obs, assinatura],
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



app.listen(3000,
    console.log("Rodando na porta 3000"))
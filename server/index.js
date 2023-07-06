const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")
const moment = require('moment')

const dataAtual = moment().format('YYYY-MM-DD')

const pediatriaA = mysql.createPool({
    host: "aws.connect.psdb.cloud",
    user: "h8rzdyent48p5kjyedku",
    password: "pscale_pw_C9CNFZSZyhvqgkqgtpRUTyHpIJ4lwZ7ckUcAdzOW8Hs",
    database: "hmg"
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

const centroC = mysql.createPool({
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
    const date = dataAtual;
    const setor = req.body.setor;
    const timeStart = req.body.timeStart;
    const timeEnd = req.body.timeEnd;
    const obs = req.body.obs;
    const assinatura = req.body.assinatura;
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


    pediatriaA.query("SELECT * FROM utia WHERE data = ?", [dataAtual], (err, result) => {
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
    const date = dataAtual;
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




    pediatriaB.query("SELECT * FROM utib WHERE data = ?", [dataAtual], (err, result) => {
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
    const date = dataAtual;
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




    pediatriaC.query("SELECT * FROM utic WHERE data = ?", [dataAtual], (err, result) => {
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
    const date = dataAtual;
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




    utiNeo.query("SELECT * FROM utineo WHERE data = ?", [dataAtual], (err, result) => {
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

//APP POST /CENTRO
app.post("/CTC", (req, res) => {
    const inspetorUm = req.body.tecnicoUm;
    const inspetorDois = req.body.tecnicoDois;
    const timeStartSala1 = req.body.timeStartSala1;
    const timeEndSala1 = req.body.timeEndSala1;
    const timeStartSala2 = req.body.timeStartSala2;
    const timeEndSala2 = req.body.timeEndSala2;
    const timeStartSala3 = req.body.timeStartSala3;
    const timeEndSala3 = req.body.timeEndSala3;
    const timeStartSala4 = req.body.timeStartSala4;
    const timeEndSala4 = req.body.timeEndSala4;
    const timeStartCrpa = req.body.timeStartCrpa;
    const timeEndCrpa = req.body.timeEndCrpa;
    const date = dataAtual;
    const setor = req.body.setor;
    const timeStart = req.body.timeStart;
    const timeEnd = req.body.timeEnd;
    const obs = req.body.obs;
    const assinatura = req.body.assinatura;
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
    const equip2_7 = req.body.equip2_7;
    const equip2_8 = req.body.equip2_8;
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
    const equip7_1 = req.body.equip7_1;
    const equip7_2 = req.body.equip7_2;
    const equip8_1 = req.body.equip8_1;
    const equip8_2 = req.body.equip8_2;
    const equip9_1 = req.body.equip9_1;
    const equip9_2 = req.body.equip9_2;
    const equip9_3 = req.body.equip9_3;
    const equip10_1 = req.body.equip10_1;
    const equip10_2 = req.body.equip10_2;
    const equip10_3 = req.body.equip10_3;
    const equip11_1 = req.body.equip11_1;
    const equip11_2 = req.body.equip11_2;
    const equip12_1 = req.body.equip12_1;
    const equip12_2 = req.body.equip12_2;
    const equip12_3 = req.body.equip12_3;
    const equip13_1 = req.body.equip13_1;
    const equip13_2 = req.body.equip13_2;
    const equip13_3 = req.body.equip13_3;
    const equip14_1 = req.body.equip14_1;
    const equip14_2 = req.body.equip14_2;
    const equip14_3 = req.body.equip14_3;


    centroC.query("SELECT * FROM centroc WHERE data = ?", [dataAtual], (err, result) => {
        if (err) {
            res.send(err);
            return;
        }

        if (result.length === 0) {
            centroC.query("INSERT INTO centroc (inspetor, inspetor2, data, setor, timeStart, timeEnd, timeStartSala1, timeEndSala1, timeStartSala2, timeEndSala2, timeStartSala3, timeEndSala3, timeStartSala4, timeEndSala4, timeStartCrpa, timeEndCrpa, equip1_1, equip1_2, equip1_3, equip1_4, equip1_5, equip1_6, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip2_6, equip2_7, equip2_8, equip3_1, equip3_2, equip3_3, equip3_4, equip4_1, equip4_2, equip4_3, equip4_4, equip5_1, equip5_2, equip5_3, equip6_1, equip6_2, equip6_3, equip7_1, equip7_2, equip8_1, equip8_2, equip9_1, equip9_2, equip9_3, equip10_1, equip10_2, equip10_3, equip11_1, equip11_2, equip12_1, equip12_2, equip12_3, equip13_1, equip13_2, equip13_3, equip14_1, equip14_2, equip14_3, Obs, Assinatura) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [inspetorUm, inspetorDois, date, setor, timeStart, timeEnd, timeStartSala1, timeEndSala1, timeStartSala2, timeEndSala2, timeStartSala3, timeEndSala3, timeStartSala4, timeEndSala4, timeStartCrpa, timeEndCrpa, equip1_1, equip1_2, equip1_3, equip1_4, equip1_5, equip1_6, equip2_1, equip2_2, equip2_3, equip2_4, equip2_5, equip2_6, equip2_7, equip2_8, equip3_1, equip3_2, equip3_3, equip3_4, equip4_1, equip4_2, equip4_3, equip4_4, equip5_1, equip5_2, equip5_3, equip6_1, equip6_2, equip6_3, equip7_1, equip7_2, equip8_1, equip8_2, equip9_1, equip9_2, equip9_3, equip10_1, equip10_2, equip10_3, equip11_1, equip11_2, equip12_1, equip12_2, equip12_3, equip13_1, equip13_2, equip13_3, equip14_1, equip14_2, equip14_3, obs, assinatura],
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

app.listen(3000);
console.log("Rodando na porta 3000");



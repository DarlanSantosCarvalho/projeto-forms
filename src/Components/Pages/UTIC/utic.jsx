import React, { useRef } from 'react';
import { useForm } from "react-hook-form"
import "./utic.css"
import Axios from "axios"
import SignatureCanvas from 'react-signature-canvas'
import moment from 'moment';

function UTIC() {

    const currentDataTime = moment().format('DD/MM/YYYY')

    const currentHour = moment().format('HH:mm')

    const checkButton = () => {
        const mensagemEscondidaConformidade = document.getElementById('mensagemEscondidaConformidade')
        const botao = document.getElementById('botao')
        var conformidades = document.querySelectorAll('input[type="radio"]')

        conformidades.forEach(function (conformidade) {
            if (conformidade.checked) {
                mensagemEscondidaConformidade.style.display = 'none'
                botao.style.pointerEvents = 'all'
            } else {
                mensagemEscondidaConformidade.style.display = 'block'
                botao.style.pointerEvents = 'none'
            }
        });
    }


    const sigCanvasRef = useRef(null);

    const handleClearSignature = (event) => {
        event.preventDefault();
        if (sigCanvasRef.current) {
            sigCanvasRef.current.clear();
        }
    };


    function handleClickCompareTime() {
        const mensagemEscondida = document.getElementById('mensagemEscondida')
        const tempoInicio = currentHour
        const tempoFim = document.getElementById('timeEnd').value
        const botao = document.getElementById('botao')

        if (tempoFim < tempoInicio || tempoFim == tempoInicio) {
            botao.style.pointerEvents = 'none'
            mensagemEscondida.style.display = 'block'
        } else {
            console.log('Tudo certo')
            botao.style.pointerEvents = 'all'
            mensagemEscondida.style.display = 'none'
        }
    }

    function handleClickCompareTecnico() {
        const mensagemEscondida = document.getElementById('mensagemEscondidaInspetor')
        const inspetorUm = document.getElementById('tecnicoUm').value;
        const inspetorDois = document.getElementById('tecnicoDois').value;
        const botao = document.getElementById('botao');

        if (inspetorUm === "NA" || inspetorDois === "NA") {
            botao.style.pointerEvents = 'none';
            mensagemEscondida.style.display = 'block';
        } else if (inspetorDois === inspetorUm || inspetorUm === inspetorDois) {
            botao.style.pointerEvents = 'none';
            mensagemEscondida.style.display = 'block';
        } else {
            botao.style.pointerEvents = 'all';
            mensagemEscondida.style.display = 'none';
        }
    }

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (e) => {
        console.log(e);
        Axios.post("http://localhost:3000/UTIC", {
            tecnicoUm: e.tecnicoUm,
            tecnicoDois: e.tecnicoDois,
            setor: e.setor,
            date: currentDataTime,
            assinatura: signatureData.signature,
            timeStart: currentHour,
            timeEnd: e.timeEnd,
            obs: e.obs,
            equip1_1: e.equip1_1,
            equip1_2: e.equip1_2,
            equip1_3: e.equip1_3, //CENTRAL DE MONITORIZAÇÃO
            equip2_1: e.equip2_1,
            equip2_2: e.equip2_2,
            equip2_3: e.equip2_3,
            equip2_4: e.equip2_4,
            equip2_5: e.equip2_5,//MONITOR MULTIPARAMETRO
            equip3_1: e.equip3_1,
            equip3_2: e.equip3_2,
            equip3_3: e.equip3_3,
            equip3_4: e.equip3_4, //VENTILADOR PULMONAR
            equip4_1: e.equip4_1,
            equip4_2: e.equip4_2,
            equip4_3: e.equip4_3,
            equip4_4: e.equip4_4, //CARDIOVERSOR
            equip5_1: e.equip5_1,
            equip5_2: e.equip5_2,
            equip5_3: e.equip5_3, //BERÇO AQUECIDO
            equip6_1: e.equip6_1,
            equip6_2: e.equip6_2, //TAG's
            equip7_1: e.equip7_1,
            equip7_2: e.equip7_2, //BOMBA DE INFUSÃO E SERINGA

        })
            .then((response) => {
                console.log(response);
                window.alert("O formulário foi enviado com sucesso");
                reset();
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='logo'>
                <a href="/">
                    <img src="https://seeklogo.com/images/M/martagao-gesteira-logo-DA1D4B5F7A-seeklogo.com.png" alt="Logo do Hospital Martagão Gesteira" />
                </a>
            </div>

            <div className="main">
                <div className="tecnicoUm">
                    <label for="Técnico executor: ">Técnico executor 1:</label>
                    <select onInput={handleClickCompareTecnico} id="tecnicoUm" {...register('tecnicoUm')}>
                        <option value="NA">Escolher técnico</option>
                        <option value="Marcele Fonseca">Marcele Fonseca</option>
                        <option value="Vitor Torres">Vitor Torres</option>
                        <option value="Monique Coutinho">Monique Coutinho</option>
                        <option value="Igor Giovani">Igor Giovani</option>
                        <option value="EngClin">Engenharia Clínica</option>
                    </select>
                </div>

                <div className="tecnicoDois">
                    <label for="Técnico executor: ">Técnico executor 2:</label>
                    <select onInput={handleClickCompareTecnico} id="tecnicoDois" {...register('tecnicoDois')} required>
                        <option value="NA">Escolher técnico</option>
                        <option value="Marcele Fonseca">Marcele Fonseca</option>
                        <option value="Vitor Torres">Vitor Torres</option>
                        <option value="Monique Coutinho">Monique Coutinho</option>
                        <option value="Igor Giovani">Igor Giovani</option>
                        <option value="EngClin">Engenharia Clínica</option>
                    </select>
                </div>

                <div className="setor">
                    <label for="setor">Setor:</label>
                    <select id="setor" {...register('setor')}>
                        <option value="UTI Pediatria C">UTI Pediatria C</option>
                    </select>
                </div>

                <div className="tempo">
                    <label>Data:</label>
                    <span><strong>{currentDataTime}</strong></span>
                    <label>Horário de início: <strong>{currentHour}</strong></label>
                    <label>Horário de saída:</label>
                    <input onInput={handleClickCompareTime} type="time" {...register('timeEnd')} id="timeEnd" />
                </div>
            </div>

            <section className="equipments">

                <h2>CENTRAL DE MONITORIZAÇÃO</h2>

                <div className="equipment-1">
                    <p>VERIFICAR A INTEGRIDADE DO MONITOR DA CENTRAL</p>
                    <input type="radio" {...register('equip1_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip1_1')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR SE TODOS OS LEITOS ESTÃO APARECENDO NO MONITOR NA ORDEM CORRETA</p>
                    <input type="radio" {...register('equip1_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip1_2')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM  SE HOUVE ALGUMA INCONSISTÊNCIA NO FUNCIONAMENTO DA CENTRAL</p>
                    <input type="radio" {...register('equip1_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip1_3')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>
                </div>


                <h2>MONITOR MULTIPARAMETRO/TRANSPORTE</h2>

                <div className="equipment-1">

                    <p>VERIFICAR SE O MONITOR ESTÁ CONECTADO A REDE ELÉTRICA</p>
                    <input type="radio" {...register('equip2_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip2_1')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR SE OS MÓDULOS ESTÃO CONECTADOS DE FORMA CORRETA</p>
                    <input type="radio" {...register('equip2_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip2_2')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR SE TODOS OS SENSORES CONECTADOS AOS PACIENTES ESTÃO APARECENDO NA TELA COM SEUS RESPECTIVOS GRÁFICOS</p>
                    <input type="radio" {...register('equip2_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip2_3')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM SE EXISTE SENSORES DE OXIMETRIA OU ECG COM DEFEITO</p>
                    <input type="radio" {...register('equip2_4')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip2_4')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM SE HOUVE ALGUMA ANORMALIDADE NO FUNCIONAMENTO DO MONITOR</p>
                    <input type="radio" {...register('equip2_5')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip2_5')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>
                </div>


                <h2>VENTILADOR PULMONAR/TRANSPORTE/BACKUP</h2>

                <div className="equipment-1">

                    <p>VERIFICAR SE O VENTILADOR ESTÁ CONECTADO CORRETAMENTE NA REDE ELÉTRICA</p>
                    <input type="radio" {...register('equip3_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip3_1')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR A EXISTÊNCIA DE MANCHAS OU INCONSISTÊNCIAS NO DISPLAY</p>
                    <input type="radio" {...register('equip3_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip3_2')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR SE A TAXA DE O2 PROGRAMADA É COMPÁTIVEL COM A MENSURADA NO DISPLAY</p>
                    <input type="radio" {...register('equip3_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip3_3')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE FISIOTERAPIA SE HOUVE ALGUMA ANORMALIDADE NO FUNCIONAMENTO DO VENTILADOR</p>
                    <input type="radio" {...register('equip3_4')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip3_4')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>
                </div>

                <h2>CARDIOVERSOR</h2>

                <div className="equipment-1">

                    <p>VERIFICAR SE O EQUIPAMENTO ESTÁ CONECTADO A REDE ELÉTRICA</p>
                    <input type="radio" {...register('equip4_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip4_1')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DAS PÁS E CABOS</p>
                    <input type="radio" {...register('equip4_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip4_2')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DO DISPLAY</p>
                    <input type="radio" {...register('equip4_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip4_3')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>REALIZAR TESTE FUNCIONAL DO EQUIPAMENTO</p>
                    <input type="radio" {...register('equip4_4')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip4_4')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>
                </div>

                <h2>BERÇO AQUECIDO</h2>

                <div className="equipment-1">

                    <p>VERIFICAR INTEGRIDADE DA BASE DO EQUIPAMENTO</p>
                    <input type="radio" {...register('equip5_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip5_1')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DO DISPLAY</p>
                    <input type="radio" {...register('equip5_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip5_2')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM SE HOUVE ALGUMA INCONSISTÊNCIA FUNCIONAMENTO DO BERÇO AQUECIDO</p>
                    <input type="radio" {...register('equip5_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip5_3')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>
                </div>

                <h2>VERIFICAÇÃO DE TAG's E ETIQUETAS DE PREVENTIVA</h2>
                <div className="equipment-1">

                    <p>VERIFICAR SE TODOS OS EQUIPAMENTOS ESTÃO COM SUAS RESPECTIVAS TAG's</p>
                    <input type="radio" {...register('equip6_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip6_1')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR SE HÁ ALGUMA ETIQUETA DE PREVENTIVA VENCIDA</p>
                    <input type="radio" {...register('equip6_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip6_2')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>
                </div>

                <h2>BOMBA DE INFUSÃO E SERINGA</h2>

                <div className="equipment-1" onMouseLeave={checkButton}>

                    <p>VERIFICAR SE A BOMBA ESTÁ CONECTADA A REDE ELÉTRICA</p>
                    <input type="radio" {...register('equip7_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip7_1')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM SE HOUVE ALGUMA ANORMALIDADE NO FUNCIONAMENTO DAS BOMBAS</p>
                    <input type="radio" {...register('equip7_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip7_2')} value="Inconforme" id="nonconformity" />
                    <label for="">Não conforme</label>
                </div>

                <h2>OBSERVAÇÕES</h2>
                <textarea {...register('obs')} id="obs" cols="30" rows="10"></textarea>

                <label htmlFor="file">Anexe Arquivo</label>
                <input type="file" />

                <label htmlFor="file">Anexe Arquivo</label>
                <input type="file" />


                <label htmlFor="textarea">Assinatura</label>
                <div className="signature-container">
                    <SignatureCanvas
                        backgroundColor="lightgray"
                        {...register('assinatura')}
                        canvasProps={{ height: 200, width: 400, className: 'sigCanvas' }}
                        ref={sigCanvasRef}
                    />
                </div>

                <button className="botao-reset" onClick={handleClearSignature}>
                    Limpar
                </button>


            </section>
            <button id='botao' type='submit'>Enviar</button>
            <h2 id='mensagemEscondida'>Corrija o horário para enviar a inspeção</h2>
            <h2 id='mensagemEscondidaInspetor'>Corrija o inspetor para enviar a inspeção</h2>
            <h2 id='mensagemEscondidaConformidade'>Marque todos os botões para enviar a inspeção</h2>
        </form >
    )
}

export default UTIC

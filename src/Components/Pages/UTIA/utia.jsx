import React, { useRef, useEffect, createContext } from 'react';
import { useForm } from "react-hook-form";
import "./utia.css";
import "../responsive.css";
import Axios from "axios";
import SignatureCanvas from "react-signature-canvas";
import moment from "moment";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from "yup";

function UTIA() {
    const schema = object({
        timeStart: string().required("Preencha o campo"),
        timeEnd: string().required("Preencha o campo"),
        equip1_1: string().required("Preencha uma opção"),
        equip1_2: string().required("Preencha uma opção"),
        equip1_3: string().required("Preencha uma opção"),
        equip2_1: string().required("Preencha uma opção"),
        equip2_2: string().required("Preencha uma opção"),
        equip2_3: string().required("Preencha uma opção"),
        equip2_4: string().required("Preencha uma opção"),
        equip2_5: string().required("Preencha uma opção"),
        equip3_1: string().required("Preencha uma opção"),
        equip3_2: string().required("Preencha uma opção"),
        equip3_3: string().required("Preencha uma opção"),
        equip3_4: string().required("Preencha uma opção"),
        equip4_1: string().required("Preencha uma opção"),
        equip4_2: string().required("Preencha uma opção"),
        equip4_3: string().required("Preencha uma opção"),
        equip4_4: string().required("Preencha uma opção"),
        equip5_1: string().required("Preencha uma opção"),
        equip5_2: string().required("Preencha uma opção"),
        equip5_3: string().required("Preencha uma opção"),
        equip6_1: string().required("Preencha uma opção"),
        equip6_2: string().required("Preencha uma opção"),
        equip6_3: string().required("Preencha uma opção"),
        equip6_4: string().required("Preencha uma opção"),
        equip6_5: string().required("Preencha uma opção"),
        equip7_1: string().required("Preencha uma opção"),
        equip7_2: string().required("Preencha uma opção"),
        equip7_3: string().required("Preencha uma opção"),
        equip7_4: string().required("Preencha uma opção"),
        equip8_1: string().required("Preencha uma opção"),
        equip8_2: string().required("Preencha uma opção"),
        equip8_3: string().required("Preencha uma opção"),
        equip9_1: string().required("Preencha uma opção"),
        equip9_2: string().required("Preencha uma opção"),
        equip10_1: string().required("Preencha uma opção"),
        equip10_2: string().required("Preencha uma opção"),
        obs: string().max(255, "Até 255 caracteres").required("Preencha a observação corretamente"),
        assinatura: string().required("Para prosseguir, é necessária a sua assinatura")
    })

    const currentDataTime = moment().format('DD/MM/YYYY');

    const sigCanvasRef = useRef();


    const handleClearSignature = (event) => {
        event.preventDefault();
        if (sigCanvasRef.current) {
            sigCanvasRef.current.clear();
        }
    };

    function handleClickCompareTime() {
        const mensagemEscondida = document.getElementById('mensagemEscondida')
        const tempoInicio = document.getElementById('timeStart').value
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

    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = (e) => {
        if (sigCanvasRef.current) {
            const signatureDataURL = sigCanvasRef.current.toDataURL();
            const signatureData = { signature: signatureDataURL };
            console.log(e);
            event.preventDefault()
            Axios.post("http://localhost:3000/UTIA", {
                tecnicoUm: e.tecnicoUm,
                tecnicoDois: e.tecnicoDois,
                setor: e.setor,
                date: currentDataTime,
                assinatura: signatureData.signature,
                timeStart: e.timeStart,
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
                equip6_2: e.equip6_2,
                equip6_3: e.equip6_3,
                equip6_4: e.equip6_4,
                equip6_5: e.equip6_5, //BALANÇA
                equip7_1: e.equip7_1,
                equip7_2: e.equip7_2,
                equip7_3: e.equip7_3,
                equip7_4: e.equip7_4, //ELETROCARDIÓGRAFO
                equip8_1: e.equip8_1,
                equip8_2: e.equip8_2,
                equip8_3: e.equip8_3, //SALA DE EQUIPAMENTOS
                equip9_1: e.equip9_1,
                equip9_2: e.equip9_2, //TAG's E ETIQUETAS
                equip10_1: e.equip10_1,
                equip10_2: e.equip10_2 //BOMBA DE INFUSÃO E SERINGA
            })
                .then((response) => {
                    console.log(response);
                    console.log(signatureData)
                    window.alert("O formulário foi enviado com sucesso");
                    reset();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    function handleSignatureChange() {
        const signature = sigCanvasRef.current.toDataURL();
        setValue('assinatura', signature);
    };

    useEffect(() => {
        handleClickCompareTecnico();
    }, []);

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
                    <select onInput={handleClickCompareTecnico} id='tecnicoUm' {...register('tecnicoUm')}>
                        <option value="NA">Escolher técnico</option>
                        <option value="Marcele Fonseca">Marcele Fonseca</option>
                        <option value="Vitor Torres">Vitor Torres</option>
                        <option value="Monique Coutinho">Monique Coutinho</option>
                        <option value="Igor Giovani">Igor Giovani</option>
                        <option value="EngClin">Engenharia Clínica</option>
                    </select>
                    <br />
                </div>

                <div className="tecnicoDois">
                    <label for="Técnico executor: ">Técnico executor 2:</label>
                    <select onInput={handleClickCompareTecnico} id='tecnicoDois' {...register('tecnicoDois')}>
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
                    <select id="setor" {...register('setor')} name="setor">
                        <option value="UTI Pediatria A">UTI Pediatria A</option>
                    </select>
                </div>

                <div className="tempo">
                    <label>Data:</label>
                    <span><strong>{currentDataTime}</strong></span>
                    <label>Horário de início:</label>
                    <input onInput={handleClickCompareTime} type="time"{...register('timeStart')} id="timeStart" />
                    <span className='error'>{errors?.timeStart?.message}</span>
                    <label>Horário de saída:</label>
                    <input onInput={handleClickCompareTime} type="time" {...register('timeEnd')} id="timeEnd" name='timeEnd' />
                    <span className='error'>{errors?.timeEnd?.message}</span>
                </div>
            </div>

            <section className="equipments">
                <h2>CENTRAL DE MONITORIZAÇÃO</h2>
                <div className="equipment">
                    <p>VERIFICAR A INTEGRIDADE DO MONITOR DA CENTRAL</p>
                    <input type="radio" {...register('equip1_1')} value="Conforme" id="conformity" name='equip1_1' />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip1_1')} value="Inconforme" id="conformity" name='equip1_1' />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip1_1?.message}</span>

                    <p>VERIFICAR SE TODOS OS LEITOS ESTÃO APARECENDO NO MONITOR NA ORDEM CORRETA</p>
                    <input type="radio" {...register('equip1_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip1_2')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip1_2?.message}</span>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM  SE HOUVE ALGUMA INCONSISTÊNCIA NO FUNCIONAMENTO DA CENTRAL</p>
                    <input type="radio" {...register('equip1_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip1_3')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip1_3?.message}</span>
                </div>


                <h2>MONITOR MULTIPARAMETRO/TRANSPORTE</h2>

                <div className="equipment">

                    <p>VERIFICAR SE O MONITOR ESTÁ CONECTADO A REDE ELÉTRICA</p>
                    <input type="radio" {...register('equip2_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip2_1')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip2_1?.message}</span>

                    <p>VERIFICAR SE OS MÓDULOS ESTÃO CONECTADOS DE FORMA CORRETA</p>
                    <input type="radio" {...register('equip2_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip2_2')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip2_2?.message}</span>

                    <p>VERIFICAR SE TODOS OS SENSORES CONECTADOS AOS PACIENTES ESTÃO APARECENDO NA TELA COM SEUS RESPECTIVOS GRÁFICOS</p>
                    <input type="radio" {...register('equip2_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip2_3')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip2_3?.message}</span>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM SE EXISTE SENSORES DE OXIMETRIA OU ECG COM DEFEITO</p>
                    <input type="radio" {...register('equip2_4')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip2_4')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip2_4?.message}</span>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM SE HOUVE ALGUMA ANORMALIDADE NO FUNCIONAMENTO DO MONITOR</p>
                    <input type="radio" {...register('equip2_5')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip2_5')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip2_5?.message}</span>
                </div>


                <h2>VENTILADOR PULMONAR/TRANSPORTE/BACKUP</h2>

                <div className="equipment">

                    <p>VERIFICAR SE O VENTILADOR ESTÁ CONECTADO CORRETAMENTE NA REDE ELÉTRICA</p>
                    <input type="radio" {...register('equip3_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip3_1')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip3_1?.message}</span>

                    <p>VERIFICAR A EXISTÊNCIA DE MANCHAS OU INCONSISTÊNCIAS NO DISPLAY</p>
                    <input type="radio" {...register('equip3_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip3_2')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip3_2?.message}</span>

                    <p>VERIFICAR SE A TAXA DE O2 PROGRAMADA É COMPÁTIVEL COM A MENSURADA NO DISPLAY</p>
                    <input type="radio" {...register('equip3_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip3_3')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip3_3?.message}</span>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE FISIOTERAPIA SE HOUVE ALGUMA ANORMALIDADE NO FUNCIONAMENTO DO VENTILADOR</p>
                    <input type="radio" {...register('equip3_4')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip3_4')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip3_4?.message}</span>
                </div>

                <h2>CARDIOVERSOR</h2>

                <div className="equipment">

                    <p>VERIFICAR SE O EQUIPAMENTO ESTÁ CONECTADO A REDE ELÉTRICA</p>
                    <input type="radio" {...register('equip4_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip4_1')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip4_1?.message}</span>

                    <p>VERIFICAR INTEGRIDADE DAS PÁS E CABOS</p>
                    <input type="radio" {...register('equip4_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip4_2')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip4_2?.message}</span>

                    <p>VERIFICAR INTEGRIDADE DO DISPLAY</p>
                    <input type="radio" {...register('equip4_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip4_3')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip4_3?.message}</span>

                    <p>REALIZAR TESTE FUNCIONAL DO EQUIPAMENTO</p>
                    <input type="radio" {...register('equip4_4')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip4_4')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip4_4?.message}</span>
                </div>

                <h2>BERÇO AQUECIDO</h2>

                <div className="equipment">

                    <p>VERIFICAR INTEGRIDADE DA BASE DO EQUIPAMENTO</p>
                    <input type="radio" {...register('equip5_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip5_1')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip5_1?.message}</span>

                    <p>VERIFICAR INTEGRIDADE DO DISPLAY</p>
                    <input type="radio" {...register('equip5_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip5_2')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip5_2?.message}</span>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM SE HOUVE ALGUMA INCONSISTÊNCIA NO FUNCIONAMENTO DO BERÇO AQUECIDO</p>
                    <input type="radio" {...register('equip5_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip5_3')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip5_3?.message}</span>
                </div>

                <h2>BALANÇA</h2>

                <div className="equipment">

                    <p>VERIFICAR NIVELAMENTO</p>
                    <input type="radio" {...register('equip6_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip6_1')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip6_1?.message}</span>

                    <p>VERIFICAR INTEGRIDADE DA CARCAÇA DA BALANÇA</p>
                    <input type="radio" {...register('equip6_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip6_2')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip6_2?.message}</span>


                    <p>VERIFICAR INTEGRIDADE DA FONTE DE ALIMENTAÇÃO</p>
                    <input type="radio" {...register('equip6_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip6_3')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip6_3?.message}</span>


                    <p>VERIFICAR SE AS INFORMAÇÕES ESTÃO LEGÍVEIS</p>
                    <input type="radio" {...register('equip6_4')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip6_4')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip6_4?.message}</span>


                    <p>VERIFICAR INTEGRIDADE DO DISPLAY</p>
                    <input type="radio" {...register('equip6_5')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip6_5')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip6_5?.message}</span>
                </div>

                <h2>ELETROCARDIÓGRAFO</h2>

                <div className="equipment">

                    <p>VERIFICAR SE EQUIPAMENTO ESTÁ CONECTADO A REDE ELÉTRICA</p>
                    <input type="radio" {...register('equip7_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip7_1')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip7_1?.message}</span>

                    <p>VERIFICAR SE AS INFORMAÇÕES ESTÃO LEGÍVEIS</p>
                    <input type="radio" {...register('equip7_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip7_2')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip7_2?.message}</span>

                    <p>VERIFICAR INTEGRIDADE DO ROLETE DO PAPEL</p>
                    <input type="radio" {...register('equip7_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip7_3')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip7_3?.message}</span>

                    <p>VERIFICAR CONDIÇÕES DA TAMPA DO COMPARTIMENTO DO PAPEL</p>
                    <input type="radio" {...register('equip7_4')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip7_4')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip7_4?.message}</span>
                </div>

                <h2>SALA DE EQUIPAMENTOS/ CARRINHO DE EMERGÊNCIA</h2>

                <div className="equipment">

                    <p>VERIFICAR INTEGRIDADE DOS EQUIPAMENTOS QUE ENCONTRAM-SE NA SALA</p>
                    <input type="radio" {...register('equip8_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip8_1')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip8_1?.message}</span>

                    <p>REALIZAR TESTE FUNCIONAL DOS EQUIPAMENTOS</p>
                    <input type="radio" {...register('equip8_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip8_2')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip8_2?.message}</span>

                    <p>REALIZAR TESTE FUNCIONAL EM TODOS OS LARINGOSCÓPIOS</p>
                    <input type="radio" {...register('equip8_3')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip8_3')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip8_3?.message}</span>
                </div>

                <h2>VERIFICAÇÃO DE TAG's E ETIQUETAS DE PREVENTIVA</h2>
                <div className="equipment">
                    <p>VERIFICAR SE TODOS OS EQUIPAMENTOS ESTÃO COM SUAS RESPECTIVAS TAG's</p>
                    <input type="radio" {...register('equip9_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip9_1')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip9_1?.message}</span>

                    <p>VERIFICAR SE HÁ ALGUMA ETIQUETA DE PREVENTIVA VENCIDA</p>
                    <input type="radio" {...register('equip9_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip9_2')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip9_2?.message}</span>
                </div>

                <h2>BOMBA DE INFUSÃO E SERINGA</h2>

                <div className="equipment">

                    <p>VERIFICAR SE A BOMBA ESTÁ CONECTADA A REDE ELÉTRICA</p>
                    <input type="radio" {...register('equip10_1')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip10_1')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip10_1?.message}</span>

                    <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM SE HOUVE ALGUMA ANORMALIDADE NO FUNCIONAMENTO DAS BOMBAS</p>
                    <input type="radio" {...register('equip10_2')} value="Conforme" id="conformity" />
                    <label for="">Conforme</label>
                    <input type="radio" {...register('equip10_2')} value="Inconforme" id="conformity" />
                    <label for="">Não conforme</label>
                    <span className='error'>{errors?.equip10_2?.message}</span>
                </div>

                <h2>OBSERVAÇÕES</h2>
                <textarea {...register('obs')} id="obs" cols="30" rows="10" placeholder='Caso não haja observações, digite "Ok"'></textarea>
                <span className='error'>{errors?.obs?.message}</span>

                <label htmlFor="file">Anexe Arquivo</label>
                <input type="file" />

                <label htmlFor="file">Anexe Arquivo</label>
                <input type="file" />


                <label htmlFor="textarea">Assinatura</label>

                <div className="signature-container">
                    <SignatureCanvas
                        backgroundColor="lightgray"
                        {...register('assinatura')}
                        canvasProps={{ className: 'sigCanvas' }}
                        ref={sigCanvasRef}
                        onEnd={handleSignatureChange}
                    />
                </div>
                {errors.assinatura && <span className="error">{errors.assinatura.message}</span>}
                <button className="botao-reset" onClick={handleClearSignature}>
                    Limpar
                </button>
            </section>

            <button id='botao' type='submit'>Enviar</button>
            <h2 id='mensagemEscondida'>Verifique o horário para enviar a inspeção.</h2>
            <h2 id='mensagemEscondidaInspetor'>Verifique a sua seleção de inspetores.</h2>
        </form >
    )
}

export default UTIA
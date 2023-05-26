import React from 'react'
import { ReactDOM } from 'react'
import { useForm } from "react-hook-form"
import "./ctc.css"
import Axios from "axios"

function CTC() {

    function handleClickYes() {
        const formContainer = document.getElementById('escondido');
        if (formContainer) {
            escondido.style.display = 'block';
        }

        function handleClickNo() {
            const formContainer = document.getElementById('escondido');
            if (formContainer) {
                escondido.style.visibility = 'none';
            }
        }
    }

    const { register, handleSubmit } = useForm();

    const onSubmit = (e) => {
        console.log(e);
        Axios.post("http://localhost:3000/CTC", {
            tecnicoUm: e.tecnicoUm,
            tecnicoDois: e.tecnicoDois,
            setor: e.setor,
            sala1: e.sala1,
            sala2: e.sala2,
            sala3: e.sala3,
            sala4: e.sala4,
            crpa: e.crpa,
            timeStartSala1: e.timeStartSala1,
            timeStartSala2: e.timeStartSala2,
            timeStartSala3: e.timeStartSala3,
            timeStartSala4: e.timeStartSala4,
            timeStartCrpa: e.timeStartCrpa,
            date: e.date,
            timeStart: e.timeStart,
            timeEnd: e.timeEnd,
            obs: e.obs,
            assinatura: e.assinatura,
            equip1_1: e.equip1_1,
            equip1_2: e.equip1_2,
            equip1_3: e.equip1_3,
            equip1_4: e.equip1_4,
            equip1_5: e.equip1_5,
            equip1_6: e.equip1_6, //MONITOR MULTIPARAMETRO
            equip2_1: e.equip2_1,
            equip2_2: e.equip2_2,
            equip2_3: e.equip2_3,
            equip2_4: e.equip2_4,
            equip2_5: e.equip2_5,
            equip2_6: e.equip2_6,
            equip2_7: e.equip2_7,
            equip2_8: e.equip2_8, //APARELHO DE ANESTESIA
            equip3_1: e.equip3_1,
            equip3_2: e.equip3_2,
            equip3_3: e.equip3_3,
            equip3_4: e.equip3_4, //FOCO CIRURGICO
            equip4_1: e.equip4_1,
            equip4_2: e.equip4_2,
            equip4_3: e.equip4_3,
            equip4_4: e.equip4_4, //MESA CIRÚRGICA
            equip5_1: e.equip5_1,
            equip5_2: e.equip5_2,
            equip5_3: e.equip5_3, //CARDIOVERSOR
            equip6_1: e.equip6_1,
            equip6_2: e.equip6_2,
            equip6_3: e.equip6_3,//BISTURI ELÉTRICO
            equip7_1: e.equip7_1,
            equip7_2: e.equip7_2,
            equip7_3: e.equip7_3,
            equip7_4: e.equip7_4,
            equip8_1: e.equip8_1,
            equip8_2: e.equip8_2,
            equip8_3: e.equip8_3,
            equip9_1: e.equip9_1,
            equip9_2: e.equip9_2,
            equip10_1: e.equip10_1,
            equip10_2: e.equip10_2
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>


            <div className='logo'>
                <a href="/">
                    <img src="src/assets/images/cropped-logo-martagao.png" alt="Logo do Hospital Martagão Gesteira" />
                </a>
            </div>

            <div className="main">

                <div className="tecnicoUm">
                    <label for="Técnico executor: ">Técnico executor 1:</label>
                    <select id="tecnicoUm" {...register('tecnicoUm')}>
                        <option value="NA">Escolher técnico</option>
                        <option value="Robson Silva">Robson Silva</option>
                        <option value="Marcele Fonseca">Marcele Fonseca</option>
                        <option value="Vitor Torres">Vitor Torres</option>
                        <option value="Monique Coutinho">Monique Coutinho</option>
                        <option value="Igor Giovani">Igor Giovani</option>
                        <option value="EngClin">Engenharia Clínica</option>
                    </select>
                </div>

                <div className="tecnicoDois">
                    <label for="Técnico executor: ">Técnico executor 2:</label>
                    <select id="tecnicoDois" {...register('tecnicoDois')} required>
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
                        <option value="UTI Neonatal">UTI Neonatal</option>
                    </select>
                </div>

                <div className="tempo">
                    <label>Data:</label>
                    <input type="date" {...register('date')} id="date" />
                    <label>Horário de início:</label>
                    <input type="time"{...register('timeStart')} id="timeStart" />
                    <label>Horário de saída:</label>
                    <input type="time" {...register('timeEnd')} id="timeEnd" />
                </div>
            </div>

            <section className="equipments">

                <h2>MONITOR MULTIPARAMETRO</h2>

                <div className="equipment-1">

                    <fieldset>
                        <p>VERIFICAR INTEGRIDADE DA BRAÇADEIRA E EXTENSOR DE PNI</p>
                        <input type="radio" {...register('equip1_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip1_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICA INTEGRIDADE DO CABO DE ECG</p>
                        <input type="radio" {...register('equip1_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip1_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR INTEGRIDADE DO SENSOR DE OXIMETRIA E PRÉ CABO (SE EXISTIR)</p>
                        <input type="radio" {...register('equip1_3')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip1_3')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR PRESENÇA DE PARÂMETRO DOS MÓDULOS EXTERNOS NA TELA</p>
                        <input type="radio" {...register('equip1_4')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip1_4')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR FUNCIONAMENTO DE CABO PAM COM SIMULADOR</p>
                        <input type="radio" {...register('equip1_5')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip1_5')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR SE OS MONITORES ESTÃO LIGADOS NA REDE ELÉTRICA</p>
                        <input type="radio" {...register('equip1_6')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip1_6')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>


                <h2>APARELHO DE ANESTESIA</h2>

                <div className="equipment-1">

                    <fieldset>
                        <p>CIRCUITO JÁ MONTADO NO APARELHO</p>
                        <input type="radio" {...register('equip2_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip2_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>TESTE DE FUGA</p>
                        <input type="radio" {...register('equip2_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip2_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>CALIBRAÇÃO DE FLUXO</p>
                        <input type="radio" {...register('equip2_3')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip2_3')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>CALIBRAÇÃO DE CÉLULA DE O2</p>
                        <input type="radio" {...register('equip2_4')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip2_4')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR CONDIÇÕES DE VISUALIZAÇÃO DA TELA E INTEGRIDADE DO DISPLAY</p>
                        <input type="radio" {...register('equip2_5')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip2_5')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR SE O PLUG NÃO ESTÁ DANIFICADO E SE O CABO ESTÁ ÍNTEGRO EM TODA SUA EXTENSÃO</p>
                        <input type="radio" {...register('equip2_6')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip2_6')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR FUGA E COMPLACÊNCIA COM CIRCUITO RESPIRATÓRIO DA SALA</p>
                        <input type="radio" {...register('equip2_7')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip2_7')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR SE OS EQUIPAMENTOS ENCONTRAM-SE LIGADOS NA REDE ELÉTRICA</p>
                        <input type="radio" {...register('equip2_8')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip2_8')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <h2>FOCO CIRURGICO</h2>

                <div className="equipment-1">

                    <fieldset>
                        <p>VERIFICAR CONDIÇÕES DA MEMBRANA E ACIONAMENTO.</p>
                        <input type="radio" {...register('equip3_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip3_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>OBSERVAR SE SINALIZAÇÃO DE TROCA DE LAMPADA ENCONTRA-SE ACESA.</p>
                        <input type="radio" {...register('equip3_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip3_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR AJUSTE DA LUMINOSIDADE</p>
                        <input type="radio" {...register('equip3_3')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip3_3')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR MOVIMENTOS DO BRAÇO ARTICULADO/ FREIO</p>
                        <input type="radio" {...register('equip3_4')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip3_4')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <h2>MESA CIRÚRGICA</h2>

                <div className="equipment-1">

                    <fieldset>
                        <p>VERIFICAR MOVIMENTOS (ELÉTRICOS )</p>
                        <input type="radio" {...register('equip4_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip4_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR OS COMANDOS DE ACIONAMENTO NO CONTROLE</p>
                        <input type="radio" {...register('equip4_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip4_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR CONDIÇÕES DE CARGA BATERIA</p>
                        <input type="radio" {...register('equip4_3')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip4_3')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR SINAIS DE FERRUGEM, PEÇAS OU PARTES QUEBRADAS</p>
                        <input type="radio" {...register('equip4_4')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip4_4')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <h2>CARDIOVERSOR</h2>

                <div className="equipment-1">

                    <fieldset>
                        <p>REALIZAR TESTE DE ROTINA DO EQUIPAMENTO</p>
                        <input type="radio" {...register('equip5_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip5_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR LIMPEZA DAS PÁS</p>
                        <input type="radio" {...register('equip5_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip5_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR SE OS CARDIOVERSORES ENCONTRAM-SE LIGADOS NA REDE ELÉTRICA</p>
                        <input type="radio" {...register('equip5_3')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip5_3')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <h2>BISTURI ELÉTRICO</h2>

                <div className="equipment-1">

                    <fieldset>
                        <p>DISPOSITIVO DE CONTROLE - VERIFICAR INTEGRIDADE DA MEMBRANA E CHAVE DE AJUSTE DO POTENCIÔMETRO.</p>
                        <input type="radio" {...register('equip6_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip6_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>SINALIZAÇÃO - VERIFICAR SE AS SINALIZAÇÕES VISUAL E SONORA ESTÃO FUNCIONANDO.</p>
                        <input type="radio" {...register('equip6_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip6_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>ACESSÓRIOS - VERIFICAR SE OS PEDAIS MONOPOLAR E BIPOLAR ESTÃO FUNCIONANDO</p>
                        <input type="radio" {...register('equip6_3')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip6_3')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <h2>ARCO CIRÚRGICO</h2>

                <div className="equipment-1">
                    <fieldset>
                        <p>REALIZAR VERIFICAÇÃO FUNCIONAL DO EQUIPAMENTO</p>
                        <input type="radio" {...register('equip7_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip7_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>INSPEÇÃO VISUAL - VERIFICAR INTEGRIDADE VISUAL DO EQUIPAMENTO</p>
                        <input type="radio" {...register('equip7_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip7_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <div className="condicional">
                    <fieldset>
                        <h2>O ARCO EM C ZIEHM ESTAVA NA SALA?</h2>
                        <input
                            type="radio"
                            {...register('equip8_1')}
                            value="Conforme"
                            id="positivo"
                            onClick={handleClickYes}
                        />
                        <label htmlFor="positivo">Sim</label>

                        <input
                            type="radio"
                            {...register('equip8_1')}
                            value="Inconforme"
                            id="nonconformity"
                            onClick={handleClickNo}
                        />
                        <label htmlFor="nonconformity">Não</label>


                        <div className="hidden" id='escondido'>
                            <h2>VERIFICAÇÃO DA CONFIGURAÇÃO DO ARCO</h2>
                            <input type="radio" {...register('equip8_2')} value="Conforme" id="conformity" />
                            <label for="">FLUROSCOPIA (CATETERISMO)</label>
                            <input type="radio" {...register('equip8_2')} value="Inconforme" id="nonconformity" />
                            <label for="">VASCULAR (RADIOINTERVENÇÃO)</label>
                        </div>

                    </fieldset>
                </div>



                {/* <h2>VERIFICAÇÃO DE TAG's E ETIQUETAS DE PREVENTIVA</h2>
                <div className="equipment-1">

                    <fieldset>
                        <p>VERIFICAR SE TODOS OS EQUIPAMENTOS ESTÃO COM SUAS RESPECTIVAS TAG's</p>
                        <input type="radio" {...register('equip9_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip9_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR SE HÁ ALGUMA ETIQUETA DE PREVENTIVA VENCIDA</p>
                        <input type="radio" {...register('equip9_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip9_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <h2>BOMBA DE INFUSÃO E SERINGA</h2>

                <div className="equipment-1">

                    <fieldset>
                        <p>VERIFICAR SE A BOMBA ESTÁ CONECTADA A REDE ELÉTRICA</p>
                        <input type="radio" {...register('equip10_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip10_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM SE HOUVE ALGUMA ANORMALIDADE NO FUNCIONAMENTO DAS BOMBAS</p>
                        <input type="radio" {...register('equip10_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip10_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div> */}

                <h2>OBSERVAÇÕES</h2>
                <textarea {...register('obs')} id="obs" cols="30" rows="10"></textarea>

                <label htmlFor="file">Anexe Arquivo</label>
                <input type="file" />

                <label htmlFor="file">Anexe Arquivo</label>
                <input type="file" />


                <label htmlFor="textarea">Assinatura</label>
                <textarea {...register('assinatura')} id="obs" cols="30" rows="10"></textarea>


            </section>
            <button type='submit'>Enviar</button>
        </form >
    )
}

export default CTC

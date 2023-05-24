import React from 'react'
import { useForm } from "react-hook-form"
import "./utia.css"
import Axios from "axios"

function UTIA() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (e) => {
        console.log(e);
        Axios.post("http://localhost:3000/", {
            tecnicoUm: e.tecnicoUm,
            tecnicoDois: e.tecnicoDois,
            date: e.date,
            timeStart: e.timeStart,
            timeEnd: e.timeEnd,
            obs: e.obs,
            assinatura: e.assinatura,
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
            equip7_1: e.quip7_1,
            equip7_2: e.quip7_2,
            equip7_3: e.quip7_3,
            equip7_4: e.quip7_4, //ELETROCARDIÓGRAFO
            equip8_1: e.quip8_1,
            equip8_2: e.quip8_2,
            equip8_3: e.quip8_3, //SALA DE EQUIPAMENTOS
            equip9_1: e.quip9_1,
            equip9_2: e.quip9_2, //TAG's E ETIQUETAS
            equip10_1: e.quip10_1,
            equip10_2: e.quip10_2 //BOMBA DE INFUSÃO E SERINGA

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
                        <option value="Robson Silva">Robson Silva</option>
                        <option value="Marcele Fonseca">Marcele Fonseca</option>
                        <option value="Vitor Torres">Vitor Torres</option>
                        <option value="Monique Coutinho">Monique Coutinho</option>
                        <option value="Igor Giovani">Igor Giovani</option>
                        <option value="EngClin">Engenharia Clínica</option>
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

                <h2>CENTRAL DE MONITORIZAÇÃO</h2>

                <div className="equipment-1">
                    <fieldset>
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
                    </fieldset>
                </div>


                <h2>MONITOR MULTIPARAMETRO/TRANSPORTE</h2>

                <div className="equipment-1">

                    <fieldset>
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
                    </fieldset>
                </div>


                <h2>VENTILADOR PULMONAR/TRANSPORTE/BACKUP</h2>

                <div className="equipment-1">

                    <fieldset>
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
                    </fieldset>
                </div>

                <h2>CARDIOVERSOR</h2>

                <div className="equipment-1">

                    <fieldset>
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
                    </fieldset>
                </div>

                <h2>BERÇO AQUECIDO</h2>

                <div className="equipment-1">

                    <fieldset>
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

                        <p>VERIFICAR JUNTAMENTE COM A EQUIPE DE ENFERMAGEM SE HOUVE ALGUMA INCONSISTÊNCIA NO FUNCIONAMENTO DO BERÇO AQUECIDO</p>
                        <input type="radio" {...register('equip5_3')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip5_3')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <h2>BALANÇA</h2>

                <div className="equipment-1">

                    <fieldset>
                        <p>VERIFICAR NIVELAMENTO</p>
                        <input type="radio" {...register('equip6_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip6_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR INTEGRIDADE DA CARCAÇA DA BALANÇA</p>
                        <input type="radio" {...register('equip6_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip6_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR INTEGRIDADE DA FONTE DE ALIMENTAÇÃO</p>
                        <input type="radio" {...register('equip6_3')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip6_3')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR SE AS INFORMAÇÕES ESTÃO LEGÍVEIS</p>
                        <input type="radio" {...register('equip6_4')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip6_4')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR INTEGRIDADE DO DISPLAY</p>
                        <input type="radio" {...register('equip6_5')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip6_5')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <h2>ELETROCARDIÓGRAFO</h2>

                <div className="equipment-1">

                    <fieldset>
                        <p>VERIFICAR SE EQUIPAMENTO ESTÁ CONECTADO A REDE ELÉTRICA</p>
                        <input type="radio" {...register('equip7_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip7_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR SE AS INFORMAÇÕES ESTÃO LEGÍVEIS</p>
                        <input type="radio" {...register('equip7_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip7_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR INTEGRIDADE DO ROLETE DO PAPEL</p>
                        <input type="radio" {...register('equip7_3')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip7_3')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>VERIFICAR CONDIÇÕES DA TAMPA DO COMPARTIMENTO DO PAPEL</p>
                        <input type="radio" {...register('equip7_4')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip7_4')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <h2>SALA DE EQUIPAMENTOS/ CARRINHO DE EMERGÊNCIA</h2>

                <div className="equipment-1">

                    <fieldset>
                        <p>VERIFICAR INTEGRIDADE DOS EQUIPAMENTOS QUE ENCONTRAM-SE NA SALA</p>
                        <input type="radio" {...register('equip8_1')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip8_1')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>REALIZAR TESTE FUNCIONAL DOS EQUIPAMENTOS</p>
                        <input type="radio" {...register('equip8_2')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip8_2')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>

                        <p>REALIZAR TESTE FUNCIONAL EM TODOS OS LARINGOSCÓPIOS</p>
                        <input type="radio" {...register('equip8_3')} value="Conforme" id="conformity" />
                        <label for="">Conforme</label>
                        <input type="radio" {...register('equip8_3')} value="Inconforme" id="nonconformity" />
                        <label for="">Não conforme</label>
                    </fieldset>
                </div>

                <h2>VERIFICAÇÃO DE TAG's E ETIQUETAS DE PREVENTIVA</h2>
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
                </div>

                <h2>OBSERVAÇÕES</h2>
                <textarea {...register('obs')}id="obs" cols="30" rows="10"></textarea>

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

export default UTIA

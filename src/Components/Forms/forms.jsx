import React from 'react'
import { useForm } from "react-hook-form"
import "./forms.css"
import Axios from "axios"

function Forms() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (e) => {
        console.log(e)
        Axios.post("https://localhost:3000",{
            inspetor: e.inspetor
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="main">
                <div className="nome">
                    <label>Nome:</label>
                    <input type="text" {...register('name')} id="name" placeholder="Digite seu nome" />
                    <label>Sobrenome:</label>
                    <input type="text" {...register('surname')} id="surname" placeholder="Digite seu sobrenome" />
                </div>
                <div className="setor">
                    <label for="setor">Setor:</label>
                    <select id="setor" {...register('setor')}>
                        <option value="NA">Escolher setor</option>
                        <option value="Centro Cirúrgico">Centro cirúrgico</option>
                        <option value="UTI Pediatria A">UTI Pediatria A</option>
                        <option value="UTI Pediatria B">UTI Pediatria B</option>
                        <option value="UTI Pediatria C">UTI Pediatria C</option>
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
                <div className="tecnico">
                    <label for="Técnico executor: ">Técnico executor:</label>
                    <select id="tecnico" {...register('tecnico')}>
                        <option value="NA">Escolher técnico</option>
                        <option value="Robson Silva">Robson Silva</option>
                        <option value="Marcele Fonseca">Marcele Fonseca</option>
                        <option value="Vitor Torres">Vitor Torres</option>
                        <option value="Monique Coutinho">Monique Coutinho</option>
                        <option value="Igor Giovani">Igor Giovani</option>
                        <option value="EngClin">Engenharia Clínica</option>
                    </select>
                </div>
            </div>

            <section className="equipments">

                <h2>MONITOR MULTIPARÂMETRO</h2>

                <div className="equipment-1">
                    <p>VERIFICAR INTEGRIDADE DA BRAÇADEIRA E EXTENSOR DE PNI</p>
                    <input type="radio" {...register('eqp1conformity-1')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp1conformity-1')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DO CABO DE ECG</p>
                    <input type="radio" {...register('eqp1conformity-2')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp1conformity-2')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DO SENSOR DE OXIMETRIA E PRÉ CABO (SE EXISTIR) </p>
                    <input type="radio" {...register('eqp1conformity-3')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp1conformity-3')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR PRESENÇA DE PARÂMETRO DOS MÓDULOS EXTERNOS NA TELA</p>
                    <input type="radio" {...register('eqp1conformity-4')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp1conformity-4')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR FUNCIONAMENTO DE CABO PAM COM SIMULADOR</p>
                    <input type="radio" {...register('eqp1conformity-5')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp1conformity-5')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR SE OS MONITORES ESTÃO LIGADOS NA REDE ELÉTRICA</p>
                    <input type="radio" {...register('eqp1conformity-6')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp1conformity-6')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>
                </div>

                <div className="equipment-2">

                    <h2>APARELHO DE ANESTESIA</h2>

                    <p>VERIFICAR INTEGRIDADE DA BRAÇADEIRA E EXTENSOR DE PNI</p>
                    <input type="radio" {...register('eqp2conformity-1')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp2conformity-1')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DO CABO DE ECG</p>
                    <input type="radio" {...register('eqp2conformity-2')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp2conformity-2')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DO SENSOR DE OXIMETRIA E PRÉ CABO (SE EXISTIR) </p>
                    <input type="radio" {...register('eqp2conformity-3')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp2conformity-3')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR PRESENÇA DE PARÂMETRO DOS MÓDULOS EXTERNOS NA TELA</p>
                    <input type="radio" {...register('eqp2conformity-4')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp2conformity-4')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR FUNCIONAMENTO DE CABO PAM COM SIMULADOR</p>
                    <input type="radio" {...register('eqp2conformity-5')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp2conformity-5')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR SE OS MONITORES ESTÃO LIGADOS NA REDE ELÉTRICA</p>
                    <input type="radio" {...register('eqp2conformity-6')} value="Conforme" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" {...register('eqp2conformity-6')} value="Inconforme" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                </div>
            </section>

            <button type='submit'>Enviar</button>

        </form >
    )
}

export default Forms

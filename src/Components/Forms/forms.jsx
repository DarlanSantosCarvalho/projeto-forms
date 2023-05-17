import React from 'react'
import "./forms.css"

function Forms() {
    return (
        <form>

            <div className="main">

                <div className="nome">
                    <label>Nome:</label>
                    <input type="text" name="name" id="name" placeholder="Digite seu nome" />
                    <label>Sobrenome:</label>
                    <input type="text" name="surname" id="surname" placeholder="Digite seu sobrenome" />
                </div>
                <div className="setor">
                    <label for="estado">Setor:</label>
                    <select id="estado" name="estado">
                        <option value="CC">Centro cirúrgico</option>
                        <option value="UTIPA">UTI Pediatria A</option>
                        <option value="UTIPB">UTI Pediatria B</option>
                        <option value="UTIPC">UTI Pediatria C</option>
                    </select>
                </div>
                <div className="tempo">
                    <label>Data:</label>
                    <input type="date" name="date" id="date" />
                    <label>Horário de início:</label>
                    <input type="time" name="time_start" id="time_start" />
                    <label>Horário de saída:</label>
                    <input type="time" name="time_end" id="time_end" />
                </div>
                <div className="tecnico">
                    <label for="Técnico executor: ">Técnico executor:</label>
                    <select id="tecnico" name="tecnico">
                        <option value="Robson">Robson Silva</option>
                        <option value="Marcele">Marcele Fonseca</option>
                        <option value="Vitor">Vitor Torres</option>
                        <option value="Monique">Monique Coutinho</option>
                        <option value="Igor">Igor Giovani</option>
                        <option value="EngClin">Engenharia Clínica</option>
                    </select>
                </div>
            </div>

            <section className="equipments">

                <h2>MONITOR MULTIPARÂMETRO</h2>

                <div className="equipment-1">
                    <p>VERIFICAR INTEGRIDADE DA BRAÇADEIRA E EXTENSOR DE PNI</p>
                    <input type="radio" name="conformity-1" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-1" id="inconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DO CABO DE ECG</p>
                    <input type="radio" name="conformity-2" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-2" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DO SENSOR DE OXIMETRIA E PRÉ CABO (SE EXISTIR) </p>
                    <input type="radio" name="conformity-3" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-3" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR PRESENÇA DE PARÂMETRO DOS MÓDULOS EXTERNOS NA TELA</p>
                    <input type="radio" name="conformity-4" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-4" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR FUNCIONAMENTO DE CABO PAM COM SIMULADOR</p>
                    <input type="radio" name="conformity-5" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-5" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR SE OS MONITORES ESTÃO LIGADOS NA REDE ELÉTRICA</p>
                    <input type="radio" name="conformity-6" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-6" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>
                </div>

                <div className="equipment-2">

                    <h2>APARELHO DE ANESTESIA</h2>

                    <p>VERIFICAR INTEGRIDADE DA BRAÇADEIRA E EXTENSOR DE PNI</p>
                    <input type="radio" name="conformity-1" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-1" id="inconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DO CABO DE ECG</p>
                    <input type="radio" name="conformity-2" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-2" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR INTEGRIDADE DO SENSOR DE OXIMETRIA E PRÉ CABO (SE EXISTIR) </p>
                    <input type="radio" name="conformity-3" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-3" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR PRESENÇA DE PARÂMETRO DOS MÓDULOS EXTERNOS NA TELA</p>
                    <input type="radio" name="conformity-4" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-4" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR FUNCIONAMENTO DE CABO PAM COM SIMULADOR</p>
                    <input type="radio" name="conformity-5" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-5" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                    <p>VERIFICAR SE OS MONITORES ESTÃO LIGADOS NA REDE ELÉTRICA</p>
                    <input type="radio" name="conformity-6" id="conformity" />
                    <label for="integridadePNI">Conforme</label>
                    <input type="radio" name="conformity-6" id="nonconformity" />
                    <label for="integridadePNI">Não conforme</label>

                </div>
            </section>

        </form >
    )
}

export default Forms

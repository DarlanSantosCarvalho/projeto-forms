import React from 'react'
import "./home.css"

function Home() {

    return (


        <div className='home'>
            <div className='logo'>
                <img src="src/assets/images/cropped-logo-martagao.png" alt="Logo do Hospital Martagão Gesteira" />
            </div>

            <h1>Escolha o setor desejado para fazer inspeção.</h1>

            <div className='opcoes'>
                <h2>
                    <a href="/UTIA">UTI A</a>
                </h2>

                <h2>
                    <a href="/UTIB">UTI B</a>
                </h2>

                <h2>
                    <a href="/UTIC">UTI C</a>
                </h2>

                <h2>
                    <a href="/UTINEO">UTI NEO</a>
                </h2>

                <h2>
                    <a href="/CTC">CENTRO CIRÚRGICO</a>
                </h2>
            </div>
        </div>
    )
}

export default Home
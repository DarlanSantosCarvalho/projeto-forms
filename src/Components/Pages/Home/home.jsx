import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css"

function Home() {

    return (


        <div className='home'>
            <div className='logo'>
                <img src="https://seeklogo.com/images/M/martagao-gesteira-logo-DA1D4B5F7A-seeklogo.com.png" alt="Logo do Hospital Martagão Gesteira" />
            </div>

            <h1>Escolha o setor desejado para fazer inspeção.</h1>

            <div className='opcoes'>
                <h2>
                    <Link to="/UTIA/">UTI A</Link>
                </h2>

                <h2>
                    <Link to="/UTIB">UTI B</Link>
                </h2>

                <h2>
                    <Link to="/UTIC">UTI C</Link>
                </h2>


                <h2>
                    <Link to="/UTINEO">UTI NEONATAL</Link>
                </h2>

                <h2>
                    <Link to="/CTC">CENTRO CIRÚRGICO</Link>
                </h2>

            </div>
        </div>
    )
}

export default Home
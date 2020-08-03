import React from 'react';
import Logo from '../../Assets/Images/Logo.png'
import './Menu.css'
// import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

function Menu () {
    return(
        <header>
            <nav className="Menu">
                <a href="/" >
                    <img src={Logo} className="Logo" alt="imagem da logo axéflix" /> 
                </a>

                <Button as="a" href="/" className="ButtonLink">
                    Novo Vídeo
                </Button>
            </nav>
        </header>
    )
}
export default Menu;
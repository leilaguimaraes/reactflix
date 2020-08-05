import React from 'react';
import {Link} from'react-router-dom';
import Logo from '../../Assets/Images/Logo.png'
import './Menu.css'
// import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

function Menu () {
    return(
        <header>
            <nav className="Menu">
                <Link to="/">
                    <img src={Logo} className="Logo" alt="imagem da logo axéflix" /> 
                </Link>

                <Button as={Link} to="/cadastro/video" className="ButtonLink">
                    Novo Vídeo
                </Button>
            </nav>
        </header>
    )
}
export default Menu;
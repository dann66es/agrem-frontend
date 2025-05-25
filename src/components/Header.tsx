

import Logo from "./Logo";
import './Header.css'

const Header = () => {

    return (
        <div className="header">  

            <Logo/>

            <nav className="navbar">

                <a className="a" href="#inicio">Inicio</a>
                <a className="a" href="#nosotros">Nosotros</a> 
                <a className="a" href="#contacto">Contacto</a>
                <a className="a" href="#pagos">Pagos</a>

            </nav>

        </div>
    
    );

};

export default Header;

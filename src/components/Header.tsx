

import Logo from "./Logo";
import './Header.css'

const Header = () => {

    return (
        <div className="header">  

            <Logo/>

            <nav className="navbar">

                <a className="a"  id="messi" href="#inicio">Inicio</a>
                <a className="a"  id="messi" href="#afiliese">Afiliese</a>
                <a className="a" id="messi" href="#nosotros">Nosotros</a> 
                <a className="a" id="messi" href="#contacto">Contacto</a>
                <a className="a" id="messi" href="#pagos">Pagos</a>

            </nav>

            

        </div>
    
    );

};

export default Header;

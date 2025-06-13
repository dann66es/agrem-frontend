

import Logo from "../Logo/Logo";
import styles from './Header.module.css';

const Header = () => {

    return (

        <div className = {styles.header}>  

            <Logo/>

            <div className = "title">

                <h1>Asociación Para la Gestión del Riesgo Empresarial</h1>        

            </div>

        </div>
    
    );

};

export default Header;

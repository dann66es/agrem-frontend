

import styles from './Logo.module.css';
import agrem_logo from "../../assets/agrem_logo.svg";

const Logo = () => {

  return <img className = {styles.logo} src = {agrem_logo} alt = "Agrem logo" />; 

};

export default Logo;

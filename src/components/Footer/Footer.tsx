

import styles from './Footer.module.css';

const Footer = () => {

  return (

    <footer className = {styles.footer}>
      
       <div className = {styles.container}>

        <div className = {styles.column}>

          <p>© {new Date().getFullYear()} <strong>AGREM</strong>. Todos los derechos reservados.</p>
          
        </div>

       </div>

    </footer>

  );

};

export default Footer;

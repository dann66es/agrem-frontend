

import styles from './Home.module.css';
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {

  return (

    <>

      <section className = {styles.container}>

        <h2 className={styles.title}>Bienvenido a AGREM</h2>

        <p className={styles.paragraph}>

          Aquí encontrarás toda la información sobre nuestra misión, servicios y demás información pertinente acerca de nuestras actividades.
          
        </p>

      </section>

      <section className = {styles.carouselWrapper}>

        <Carousel />

      </section>    

      <section id="sec">

      <p className = {styles.paragraph1}>

      AGREM es una alianza estratégica liderada por la Policía Nacional de Colombia 
      y el gremio empresarial, a nivel departamental, que une recursos, experiencia 
      y tecnología para elevar los estándares de seguridad en la cadena logística. 
      Mediante comunicación oportuna, intercambio responsable de información y 
      capacitación continua, AGREM trabaja por prevenir el delito, mejorar la 
      movilidad y reducir la siniestralidad vial, fortaleciendo así la 
      competitividad y la responsabilidad social del sector empresarial.

      </p>

      </section>     

    </>

  );

};

export default Home;

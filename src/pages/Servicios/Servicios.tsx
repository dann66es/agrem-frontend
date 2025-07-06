import styles from './Servicios.module.css';

const Servicios = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Servicios</h2> 

      <p className={styles.paragraph}>
        Descubre cómo nuestros servicios pueden ayudarte a crecer profesionalmente y resolver tus necesidades laborales.
      </p>
      
      <ul className={styles.servicesContainer}>
        <li className={styles.serviceItem}>Búsqueda de empleo</li>
        <li className={styles.serviceItem}>Asesoramiento legal</li>
        <li className={styles.serviceItem}>Capacitación Total</li>
      </ul>
    </section>
  );
};

export default Servicios;


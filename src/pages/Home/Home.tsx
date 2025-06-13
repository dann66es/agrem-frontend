import styles from './Home.module.css';
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Bienvenido a agrem</h1>
        <p className={styles.text}>
          Esta es la página principal de nuestra organización.</p>

      </section>

      <Carousel />

      <section id="sec">

     <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum debitis cupiditate, ad dolor, commodi odit omnis impedit repellendus expedita magni eveniet voluptatem ex voluptas! Ipsum, amet. Minima, non sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, eius ab neque quo consequuntur aliquam nobis ipsum officiis unde. Fuga explicabo corrupti libero veniam aspernatur nemo impedit maiores cupiditate voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at sequi quasi, temporibus et quas voluptatibus aperiam amet neque voluptate ea, architecto pariatur mollitia reprehenderit quam? Enim rerum quo necessitatibus!</p> 

      </section>


     

    </>
  );
};

export default Home;

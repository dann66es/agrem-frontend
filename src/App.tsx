import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import styles from "./components/Header/Header.module.css";



import Home from './pages/Home/Home';
import Nosotros from './pages/Nosotros/Nosotros';
import Servicios from "./pages/Servicios/Servicios";
import Afiliese from './pages/Afiliese/Afiliese';
import Contacto from './pages/Contacto/Contacto';
import Pagos from './pages/Pagos/Pagos';
import Footer from "./components/Footer/Footer";

function App () {
  return (
    <BrowserRouter>
      <Header />

      <nav className={styles.navbar}>
        <Link className={styles.a} id={styles.link} to="/">Inicio</Link>
        <Link className={styles.a} id={styles.link} to="/nosotros">Nosotros</Link>
        <Link className={styles.a} id={styles.link} to="/servicios">Servicios</Link>
        <Link className={styles.a} id={styles.link} to="/afiliese">Afíliese</Link>
        <Link className={styles.a} id={styles.link} to="/pagos">Pagos</Link>
        <Link className={styles.a} id={styles.link} to="/contacto">Contacto</Link>
     
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/afiliese" element={<Afiliese />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pagos" element={<Pagos />} />
      </Routes>


    <section>

    <Footer/>

    </section>

       

 

    </BrowserRouter>




  );
}

export default App;

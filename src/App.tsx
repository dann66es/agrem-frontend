import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import styles from "./components/Header/Header.module.css";

import Home from './pages/Home/Home';
import Nosotros from './pages/Nosotros/Nosotros';
import Afiliese from './pages/Afiliese/Afiliese';
import Contacto from './pages/Contacto/Contacto';
import Pagos from './pages/Pagos/Pagos';

function App () {
  return (
    <BrowserRouter>
      <Header />

      <nav className={styles.navbar}>
        <Link className={styles.a} id={styles.link} to="/">INICIO</Link>
        <Link className={styles.a} id={styles.link} to="/nosotros">NOSOTROS</Link>
        <Link className={styles.a} id={styles.link} to="/afiliese">AFILIESE</Link>
        <Link className={styles.a} id={styles.link} to="/contacto">CONTACTO</Link>
        <Link className={styles.a} id={styles.link} to="/pagos">PAGOS</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/afiliese" element={<Afiliese />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pagos" element={<Pagos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

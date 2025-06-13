

import Carousel from './components/Carousel/Carousel'
import './App.css'
import Header from './components/Header/Header'
import styles from "./components/Header/Header.module.css"


function App () {
  
  return (
  
    <>

      <div>

        <Header/>

        <nav className = {styles.navbar}>

          <a className = {styles.a} id = {styles.messi} href = "#inicio">INICIO</a>          
          <a className = {styles.a} id = {styles.messi} href = "#nosotros">NOSOTROS</a> 
          <a className = {styles.a} id = {styles.messi} href = "#afiliese">AFILIESE</a>
          <a className = {styles.a} id = {styles.messi} href = "#contacto">CONTACTO</a>
          <a className = {styles.a} id = {styles.messi} href = "#pagos">PAGOS</a>

        </nav>

        <Carousel /> 
        
      </div>
     
      <p className = "Paragraph" > Curso Controlador de Eventos</p>

    </>

  )

}

export default App

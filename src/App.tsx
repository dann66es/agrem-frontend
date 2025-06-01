

import Carousel from './components/Carousel/Carousel'
import './App.css'
import Header from './components/Header'

function App () {
  
  return (
  
    <>

      <div>

        <Header/>

        <nav className = "navbar">

          <a className = "a" id = "messi" href = "#inicio">Inicio</a>
          <a className = "a" id = "messi" href = "#afiliese">Afiliese</a>
          <a className = "a" id = "messi" href = "#nosotros">Nosotros</a> 
          <a className = "a" id = "messi" href = "#contacto">Contacto</a>
          <a className = "a" id = "messi" href = "#pagos">Pagos</a>

        </nav>

        <Carousel /> 
        
      </div>
     
      <p className = "Paragraph" > Curso Controlador de Eventos</p>

    </>

  )

}

export default App

import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './componentes/Header/Index';
import HomePages from './componentes/Home/HomePages';
import Footer from './componentes/Footer/Footer';
import SinglePage from './componentes/Watch/SinglePage';
import FormCrear from './componentes/CrearContenido/FormCrear';
import Ocultar from './componentes/OcultarForm/Ocultar';
import Seccion from './componentes/Secciones/Index';
import { upcome, recomendado} from "../src/Billboard"
import Lanzamientos from './componentes/Lanzamientos/Lanzamientos';
import Seccion_1 from './componentes/Secciones/Seccion_1'
//npm start


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [cardsHom, actualizarCardsHom] = useState([])
  const [imagenFlecha, setImagenFlecha] = useState('../img/form.png');

  const [moviesNov, actualizarMovies] = useState([
    {
      id: 1,
      name: "Flight",
      time: "2h : 20m",
      cover: "../img/images/denzel.png"
    },
    {
      id: 2,
      name: "Desert",
      time: "2h : 20m",
      cover: "../img/images/upcome/bikes.png"
    },
    {
      id: 3,
      name: "Montc",
      time: "2h : 20m",
      cover: "https://github.com/JhonFaverM.png"
    },
    {
      id: 4,
      cover: "../img/images/alien.png",
      name: "Alien",
      time: "2h : 25m",
    },
    {
      id: 5,
      cover: "../img/images/depre.png",
      name: "The Predator",
      time: "2h : 02m",
    },
    {
      id: 6,
      cover: "../img/images/siete.png",
      name: "Siete Almas",
      time: "2h : 45m",
    },
    {
      id: 7,
      cover: "../img/images/lagimas.png",
      name: "Lagrimas del sol",
      time: "2h : 10m",
    },
    {
      id: 8,
      cover: "../img/images/kong.png",
      name: "Kong",
      time: "2h : 38m",
    },
    {
      id: 9,
      cover: "../img/images/fury.jpg",
      name: "Fury",
      time: "2h : 05m",
    },
  ])

    //Opcion secciones cards carousel
  const secciones = [
    {
      titulo: "Lanzamientos",
    },
    {
      titulo: "Estrenos",
    },
    {
      titulo: "Recomendado"
    }
  ]

  //Registrar una cards pequeña 
    const registrarMovie = (movie) => {
    console.log("Nueva pelicula", movie)
    //Spread operator
    actualizarMovies([...moviesNov, movie])
  }

  //Registrar cardHome
  const registrarCardHome = (cardHome) => {
    console.log("Nueva CardHome", cardHome)
    actualizarCardsHom([...cardsHom, cardHome])
  }

  const [items, setItems] = useState(upcome)
  const [rec, setrec] = useState(recomendado)
  const [mov, setMov] = useState(moviesNov)

  //Formulario
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
    setImagenFlecha((prevImagen) =>
    prevImagen === '../img/form.png' ? '../img/cargar.png' : '../img/form.png'
    );
  };

  //Lista de HomeSecciones (= equipos)
  const homeSecciones = [
    {
      titulo: "Recomendado"
    },
    {
      titulo: "Estrenos"
    },
    {
      titulo: "Mas vistos"
    }
  ]
 

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/singlePage/:id' element={<SinglePage />} />

        <Route path='/formCrear' element={
        <>
          {
            mostrarFormulario ? <FormCrear 
              secciones={secciones.map((seccion) => seccion.titulo)}
              registrarMovie={registrarMovie}
              //Form Home
              homeSecciones={homeSecciones.map((seccionHom) => seccionHom.titulo )}
              registrarCardHome={registrarCardHome}

            /> : <div></div>
          }
           
          <Ocultar cambiarMostrar={cambiarMostrar} imagenFlecha={imagenFlecha}/>

         {
          homeSecciones.map((carrusel) => <Seccion_1  
            datos={carrusel} 
            key={carrusel.titulo}
            cardsHom={cardsHom.filter(cardHome => cardHome.seccionHome === carrusel.titulo)}
            /*cardsHom = ARREGLO,  cardHome = EL OBJETO desde CardHome => cardHome del valor 
            seccionHome de la option del formulario que tambien se paso como propíedad al objeto
            que esta en el componente CardHome*/
          />
          )
         }

          {
            secciones.map((seccion) => <Seccion
                datos={seccion}
                key={seccion.id}
                moviesNov={moviesNov.filter((movie) => movie.seccion === seccion.titulo)}
              />
            )
          }
         
          <Lanzamientos items={mov} title="Top 10"/>
           {/*<Lanzamientos items={mov} title="Top 10"/>*/}

        </>
      } />
      </Routes>   
     
      <Footer />
     
    </div>
  );
}

export default App;
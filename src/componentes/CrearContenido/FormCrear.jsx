import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Index"
import Boton from "../BotonCrear/Index"
import OpcionesCat from "../OpcionesCategoria/OpcionesCat"
import CampoTexto from "../Campo/Index_1"
import OpcionesHome from "../OpcionesCategoria/OpcionesHome"

const FormCrear = (props) => {

  const [name, actualizarName] = useState("")
  const [time, actualizarTime] = useState("")
  //const [cover, actualizarCover] = useState("")
  const [selectedFile, actualizarSelectedFile] = useState(null)

  const [seccion, actualizarSeccion] = useState("")

  const {registrarMovie} = props

  const [imageUrl, actualizarImageUrl] = useState("")
    const manejarCambioImagen = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      actualizarSelectedFile(file)
      actualizarImageUrl(reader.result)
    }
  }

  const manejarEnvio =(e) => {
    e.preventDefault();
    //console.log("manejar envio")
    let datosAEnviar = {
      name,
      time,
      cover: imageUrl,
      seccion
    }
    registrarMovie(datosAEnviar)
  }

  //FORMULARIO MOVIE-HOME

  const [nombre, actualizarNombre] = useState("")
  const [tiempo, actualizarTiempo] = useState("")
  const [descrip, actualizarDescrip] = useState("")
  const [calificacion, actualizarCalificacion] = useState("")
  const [starring, actualizarStarring] = useState("")
  const [genero, actualizarGenero] = useState("")
  const [portada, actualizarPortada] = useState("")
  const [seleccionarFile, actualizarSeleccionarFile] = useState(null)
  
  const [seccionHome, actualizarSeccionHome] = useState("")//useState("Recomendacion") predetermina el select

  const {registrarCardHome} = props


  const [imgUrl, actualizarImgUrl] = useState("")
    const manejoCambioImage = (e) => {
      const archivo = e.target.files[0];
      const reader = new FileReader()
      reader.readAsDataURL(archivo)
      reader.onload = () => {
        actualizarSeleccionarFile(archivo)
        actualizarImgUrl(reader.result)
      }
    }

  const manejarEnvio_1 = (e) => {
    e.preventDefault();
    console.log("Envio home")
    let datosXEnviar = {
      nombre,
      tiempo,
      descrip,
      calificacion,
      starring,
      genero,
      cover: imgUrl,
      seccionHome,
    }
    registrarCardHome(datosXEnviar) 
  }

  return <section className='formulario'>
    <>
      <form onSubmit={manejarEnvio} className="amplitud" >
          <h2>Formulario para cargar pelis</h2>
          <Campo
            className="textoInt"
            titulo="Name"
            placeholder="Nombre pelicula" 
            required valor={name} 
            actualizarValor={actualizarName} 
          />
          <Campo 
            titulo="Tiempo" 
            placeholder="Duracion/ 00h : 00m" 
            required
            valor={time} 
            actualizarValor={actualizarTime} 
          />
        
        <Campo
            type="file" 
            titulo="cover" 
            placeholder="Seleccionar imagen" 
            required
            manejarCambioImagen={manejarCambioImagen}
          />
          <OpcionesCat 
            valor={seccion} 
            actualizarSeccion={actualizarSeccion}
            secciones={props.secciones} 
          />
          <Boton>Crear</Boton>   
      </form>
      <form onSubmit={manejarEnvio_1} className="amplitud">
        <h2>Formulario para cargar home</h2>
        <CampoTexto 
          titulo="Nombre"
          placeholder="Nombre pelicula"
          required
          valor={nombre}
          actualizarValor={actualizarNombre} 
        />
        <CampoTexto 
          titulo="Tiempo"
          placeholder="Duracion/ 00h : 00m"
          required
          valor={tiempo}
          actualizarValor={actualizarTiempo} 
         />
        <CampoTexto 
          titulo="Descripcion"
          placeholder="Descripcion"
          required
          valor={descrip}
          actualizarValor={actualizarDescrip}  
        />
        <CampoTexto 
          titulo="Starring" 
          placeholder="Starring" 
          required
          valor={starring}
          actualizarValor={actualizarStarring} 
        />
        <CampoTexto 
          titulo="Calificacion" 
          placeholder="Calificacion/ 00 %" 
          required
          valor={calificacion}
          actualizarValor={actualizarCalificacion}
        />
        <CampoTexto 
          titulo="Genero" 
          placeholder="Genero" 
          required
          valor={genero}
          actualizarValor={actualizarGenero}
        />
        <CampoTexto
            type="file" 
            titulo="cover" 
            placeholder="Seleccionar imagen" 
            required
            manejoCambioImage={manejoCambioImage}
          />
        <OpcionesHome
          valor={seccionHome}
          actualizarSeccionHome={actualizarSeccionHome}
          homeSecciones={props.homeSecciones}  
        />
        <Boton>Crear</Boton>
      </form>
      
    </>

  </section>
}


export default FormCrear
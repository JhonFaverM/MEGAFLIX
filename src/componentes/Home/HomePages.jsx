import React, { useState } from "react"
import Homes  from "../../componentes/Homess/Homes"
import MasVisto from "../MasVisto/MasVisto"
import Lanzamientos from "../Lanzamientos/Lanzamientos"
import { upcome, latest, recomendado } from "../../Billboard"
import Seccion from "../Secciones/Index"
//import { MovieCard } from "../MovieHome/MovieCard"




const HomePages = () => {

  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setrec] = useState(recomendado)
  return (
    <>
      <Homes />
      <Lanzamientos items={items} title="Lanzamientos"/>
      <Lanzamientos items={item} title="Estrenos"/>
      <MasVisto />
      <Lanzamientos items={rec} title="Lo mas recomendado"/>

       
      
    </>
  )
}

export default HomePages
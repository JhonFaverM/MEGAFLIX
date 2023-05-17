import React, { useState } from "react"
import Homes  from "../../componentes/Homess/Homes"
import MasVisto from "../MasVisto/MasVisto"
import Lanzamientos from "../Lanzamientos/Lanzamientos"
import { upcome, latest, recomendado, homeData } from "../../Billboard"
import Descrip from "../Homess/Descrip"
//import { MovieCard } from "../MovieHome/MovieCard"



const HomePages = () => {

  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setrec] = useState(recomendado)
  //const [desc, setDesc] = useState(homeData); // Estado para almacenar la descripción
  //const desc = "Description of the movie";
 
  return (
    <>
      <Homes />
      <Lanzamientos items={items} title="Lanzamientos"/>
      <Lanzamientos items={item} title="Estrenos"/>
      <MasVisto />
      <Lanzamientos items={rec} title="Recomendados"/>
    </>
  )
}

export default HomePages


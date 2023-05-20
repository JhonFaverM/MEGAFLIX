import React, { useState } from "react"
import { Link } from "react-router-dom"
import FormCrear from "../CrearContenido/FormCrear"
//import "../Movies/Movie.css"

const Movie = ({datos: {  cover, name, time}}) => {  

  return (
    <>
        <div className='MovieBox'>
          <div className='img'>
            <img src={cover} alt='Portada de pelicula' />
          </div>
          <div className='text'>
            <h2>{name}</h2> 
            <span>{time}</span> <br />
            <button className='primary-btn'>
              <i className='fa fa-play'></i> PLAY NOW
            </button>
          </div>
        </div>
    </>
  )
}



export default Movie

import React from 'react'
//import "./MovieHome.css"
import { Link } from 'react-router-dom'
//INGRESO DESDE PROPS CARDS HOME

const CardHome = (props) => {
    const { cover, nombre, tiempo, descrip, calificacion, starring, genero, seccionHome} = props.datos
    return <div className="box">
        <div className="coverImage" >
            <img src={cover} />
        </div>
        <div className="content flex">
        <div className='details row'>
            <h1>{nombre}</h1>
            <div className='rating flex'>
                <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
                </div>
                <label>{calificacion} Calificacion</label>
                <span>UHD</span>
                <label>{tiempo}</label>
            </div>
            <p>{descrip} </p>
            <div className='cast'> 
                <h4>
                    <span>Starring </span>
                    {starring}
                </h4>
                <h4>
                    <span>Genero </span>
                    {genero}
                </h4>
            </div>
            <button className='primary-btn'>
                <i className='fas fa-play'></i>PLAY NOW
            </button>              
        </div>
        <div className='palyButton row'>          
            <button>
                <div className='img'>
                    <img src='./img/images/play-button.png'></img>
                    <img src='./img/images/play.png' className='change'></img>
                </div>
                WATCH TRAILER
            </button>
        </div>
        </div>
    </div>
  
}
   

export default CardHome
/*
<div className='rating flex'>
                    <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-half'></i>
                    </div>
                    <label>{calificacion}(Imdb)</label>
                    <span>UHD</span>
                    <label>{tiempo}</label>
                </div> 
*/


/*
import React from 'react'
import "./MovieHome.css"
import { Link } from 'react-router-dom'
//INGRESO DESDE PROPS CARDS HOME

const CardHome = (props) => {
    const  { nombre, tiempo, descrip, calificacion, starring, genero, seccionHome} = props.datos
    console.log(nombre)
    return (
    <>
    <div className='box'>
        <div className="coverImage">
            <img src='./img/images/fury.jpg' />
        </div>
        <div className='content flex'>
            <div className='details row'>
                <h1>{nombre}</h1>
                <div className='rating flex'>
                    <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-half'></i>
                    </div>
                    <label>{calificacion}(Imdb)</label>
                    <span>UHD</span>
                    <label>{tiempo}</label>
                </div>
                <p>{descrip}</p>
                <div className='cast'>
                    <h4>
                        <span>Starring</span>
                        {starring}
                    </h4>
                    <h4>
                        <span>Genero</span>
                        {genero}
                    </h4>
                </div>
                <button className='primary-btn'>
                    <i className='fas fa-play'></i>PLAY NOW
                  </button>
            </div>
            <div className='palyButton row'>
                    <button>
                      <div className='img'>
                        <img src='./img/images/play-button.png'></img>
                        <img src='./img/images/play.png' className='change'></img>
                      </div>
                      WATCH TRAILER
                    </button>
                </div>
        </div>
        
        </div>
    </>
  )
}

export default CardHome
*/
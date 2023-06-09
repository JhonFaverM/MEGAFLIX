import React from 'react';
import "./Seccion.css"
import Movie from "../Movies/Movie";
import hexToRgba from 'hex-to-rgba';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../Movies/Movie.css"

//LANZAMIENTOS card prequeña
const SmapleNextArrow =(props) => {
    const { onClick } = props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    )
  }

  const SmaplePrevArrow =(props) => {
    const { onClick } = props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="fa fa-chevron-left"></i>
        </button>
      </div>
    )
  }

const Seccion = (props) => {
    const { titulo, id} = props.datos
    const {moviesNov} = props

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(3, moviesNov.length), // Mostrar hasta 3 tarjetas, o menos si hay menos elementos en moviesNov
        slidesToScroll: 1,
        nextArrow: <SmapleNextArrow />,
        prevArrow: <SmaplePrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
      };
   
    return (
        <> 
            {
             moviesNov.length > 0 &&
            <section className="upcome">
                <div className='container'>
                  <div className='heading flexSB'>
                    <h2>{titulo}</h2>
                  </div>
                    <div className="content">
                        <Slider {...settings}>
                            {moviesNov.map( (datos) => (
                            <Movie key={datos.cover} datos={datos}
                            />
                        ))}
                            
                        </Slider>                      
                    </div>  
                </div>
            </section>}
    </>)
}


export default Seccion


/*

import React from 'react';
import "./Seccion.css"
import Movie from "../Movies/Movie";
import hexToRgba from 'hex-to-rgba';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
//import "../Movies/Movie.css"

//LANZAMIENTOS card prequeña
const SmapleNextArrow =(props) => {
    const { onClick } = props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    )
  }

  const SmaplePrevArrow =(props) => {
    const { onClick } = props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="fa fa-chevron-left"></i>
        </button>
      </div>
    )
  }

const Seccion = (props) => {
    const { titulo, id} = props.datos
    const {moviesNov} = props

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SmapleNextArrow />,
        prevArrow: <SmaplePrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
      };

      // Duplicar elementos si no hay suficientes para llenar los slides
  const duplicatedMovies = moviesNov.concat(moviesNov).concat(moviesNov);
   
    return (
        <> 
            {
            moviesNov.length > 0 &&
            <section className="upcome">
                <div className='container'>
                  <div className='heading flexSB'>
                    <h2>{titulo}</h2>
                  </div>
                    <div className="content">
                        <Slider {...settings}>
                            {moviesNov.map( (datos) => (
                            <Movie key={datos.cover} datos={datos}
                            />
                        ))}
                            
                        </Slider>                      
                    </div>  
                </div>
            </section>}
    </>)
}


export default Seccion

*/
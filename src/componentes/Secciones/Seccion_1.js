import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CardHome from '../MoviesHome/CardHom'
import "../Movies/Movie.css"
//SECCION HOME
const SmapleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    )
  }
  
  const SmaplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="fa fa-chevron-left"></i>
        </button>
      </div>
    )
  }

const Seccion_1 = (props) => {
  const {titulo} = props.datos
  const {cardsHom} = props
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SmapleNextArrow />,
        prevArrow: <SmaplePrevArrow />,
      }
  return (
    <>
      {cardsHom.length > 0 &&
      <div className='homeContainer'>
        <h2>{titulo}</h2>
        <Slider {...settings}>
          {cardsHom.map((datos) => {
              return <section className="home">
              <CardHome key={datos.cover} datos={datos} />
            </section>
          })}
        </Slider>
      </div>}
    </>
  )
}

export default Seccion_1

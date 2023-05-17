import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

export const HomeCard = ({ item: { id, cover, name, rating, time, desc,
    starring, genres, tags, video }}) => {
      const limitedDesc = `${desc.substring(0, 10)}...`; 
      console.log(name)


  return (
    <>
       <div className='box'>
            <div className='coverImage'>
                <img src={cover} alt='' />
            </div>
            <div className='content flex'>
                <div className='details row'>
                  <h1>{name}</h1>
                    <div className='rating flex'>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-half'></i>
                      </div>
                      <label>{rating} Calificación</label>
                      <span>UHD</span>
                      <label className='time'>{time}</label>
                    </div>
                  <p className="limited-text" >{desc}</p>
                  
                  
                  <div className='cast'>
                    <h4>
                      <span>Starring </span>
                      {starring}
                    </h4>
                    <h4>
                      <span >Genero </span>
                      {genres}
                    </h4>
                    <h4>
                      <span>Clasificación </span>
                      {tags}
                    </h4>
                  </div>
                  <Link to={`/singlepage/${id}`}>
                    <button className='primary-btn'>
                      <i className='fas fa-play'></i>PLAY NOW
                    </button>
                    </Link>
                </div>

                <div className='palyButton row'>
                  <Link to={`/singlepage/${id}`}>
                    <button>
                      <div className='img'>
                        <img src='./img/images/play-button.png'></img>
                        <img src='./img/images/play.png' className='change'></img>
                      </div>
                      WATCH TRAILER
                    </button>
                  </Link>
                </div>
              </div>
              
      </div>
      
    </>
  )
}


/* 
 return (
    <>
       <div className='box'>
            <div className='coverImage'>
                <img src={cover} alt='' />
            </div>
            <div className='content flex'>
                <div className='details row'>
                  <h1>{name}</h1>
                    <div className='rating flex'>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-half'></i>
                      </div>
                      <label>{rating} Calificación</label>
                      <span>UHD</span>
                      <label>{time}</label>
                    </div>
                  <p>{desc}</p>
                  
                  
                  <div className='cast'>
                    <h4>
                      <span>Starring </span>
                      {starring}
                    </h4>
                    <h4>
                      <span>Genero </span>
                      {genres}
                    </h4>
                    <h4>
                      <span>Clasificación </span>
                      {tags}
                    </h4>
                  </div>
                  <button className='primary-btn'>
                    <i className='fas fa-play'></i>PLAY NOW
                  </button>
                </div>

                <div className='palyButton row'>
                  <Link to={`/singlepage/${id}`}>
                    <button>
                      <div className='img'>
                        <img src='./img/images/play-button.png'></img>
                        <img src='./img/images/play.png' className='change'></img>
                      </div>
                      WATCH TRAILER
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <p>{desc}</p>
              </div>
      </div>
      
    </>
  )
}


*/
import React, { useState, useEffect } from 'react'
import "./SinglePages.css"
import { useParams } from 'react-router-dom'
import { homeData } from '../../Billboard'
import Lanzamientos from '../Lanzamientos/Lanzamientos'
import { recomendado } from '../../Billboard'

const SinglePage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = homeData.find((item) => item.id === parseInt(id))
        if (item) {
          setItem(item)
        }
    }, [id])
    const [rec, setRec] = useState(recomendado)

  return (
    <>
       {item ? (
        <>
          <section className='singlePage'>
            <div className='singleHeading'>
              <h1>{item.name} </h1>
              <span> | {item.time} | </span> <span> HD </span>
            </div>
            <div className='container'>
              <video src={item.video} controls ></video>
              <div className='para'>
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                <p>Get access to the direct Project Overview with this report. 
                      Just by a quick glance, you’ll have an idea of the total tasks 
                      allotted to the team, number of milestones given & completed, 
                      total Links created for the project and the total time taken by all the users.
                      Each section would elaborate the data further, if chosen.</p>
              </div>
              <div className='social'>
                <h3>Recomendar & compartir : </h3>
                <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
              </div> 
            </div>
          </section>
          <Lanzamientos items={rec} title="Lo mas recomendado"/>
        </>
      ) : null}
    </>
  )
}

export default SinglePage

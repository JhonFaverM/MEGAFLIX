import React from "react"
import { Link } from "react-router-dom"

const LanzCard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <h2>{name}</h2>
          <span>{time}</span> <br />
          {/*<Link to={`/singlepage/${id}`}>*/}
          <button className='primary-btn'>
            <i className='fa fa-play'></i> PLAY NOW
          </button>
          {/*</Link>*/}
        </div>
      </div>
    </>
  )
}

export default LanzCard

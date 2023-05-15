import React, { useState } from 'react'
import "./MasVisto.css"
import { loMasVisto } from '../../Billboard'
import { Home } from '../Homess/Home'

const MasVisto = () => {
    const [items, setItems] = useState(loMasVisto)
  return (
    <>
      <section className='masVisto'>
        <Home items={items} />
      </section>
    </>
  )
}

export default MasVisto

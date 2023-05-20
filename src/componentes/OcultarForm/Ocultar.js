import React from "react";
import { useState } from "react"
import "./Ocultar.css"

const Ocultar = (props) => {
    console.log(props)
    return <section className="orgSection">
        <h3 className="title">BIENVENIDOS A VER LAS ULTIMAS NOVEDADES</h3>
        <img src={props.imagenFlecha} alt="add." onClick={props.cambiarMostrar} />
    </section>
}

export default Ocultar

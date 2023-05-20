import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    console.log("datos externos :",props)

    //console.log("Datos: ", props)
    const placeholderModificador = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    const manejarSeleccionArchivo = (e) => {
        const archivoSeleccionado = e.target.files[0];
        console.log("Archivo seleccionado:", archivoSeleccionado);  
        props.manejarCambioImagen(e);
      }

    return <div className="campo">
        <label>{props.titulo}</label>
        {props.type === "file" && props.manejarCambioImagen ? ( 
         <input 
            type="file"
            name={props.name}
            required={props.required}
            onChange={manejarSeleccionArchivo}
         />
            ) : (
        <input
            type="text"
            placeholder={placeholderModificador} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
        )
    }
</div>
}

export default Campo
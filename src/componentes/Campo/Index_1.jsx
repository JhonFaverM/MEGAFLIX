import { useState } from "react"
import "./Campo.css"

const CampoTexto = (props) => {
    console.log("datos de afuera :", props)
    const placeholderModificador = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    const manejarSeleccionFile = (e) => {
        const fileSeleccionado = e.target.files[0];
        console.log("Archivo seleccionado:",fileSeleccionado);  
        props.manejoCambioImage(e);
    }

    return <div className="campo">
        <label>{props.titulo}</label>
        {props.type === "file" && props.manejoCambioImage ? (
            <input 
                type="file"
                name={props.name}
                required={props.required}
                onChange={manejarSeleccionFile}
            />
            ) : (
            <input 
                placeholder={placeholderModificador}  
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
            />
            )
            
        }
    </div>
}

export default CampoTexto


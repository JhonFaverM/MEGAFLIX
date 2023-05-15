import "./OpcionesCat.css"


const OpcionesCat = (props) => {

  const manejarCambio = (e) => {
    console.log("cambio", e.target.value)
    props.actualizarSeccion(e.target.value)
  }

  return <div className="opcionesCat">
    <label>Secciones</label>
    <select value={props.valor} onChange={manejarCambio}>
      <option value="" disabled defaultValue="" hidden>Seleccionar seccion</option>
      {props.secciones.map((seccion, index) => <option key={ index } value={seccion}>{ seccion }</option>)}
    </select>

  </div>
}





export default OpcionesCat
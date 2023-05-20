import "./OpcionesCat.css"


const OpcionesHome = (props) => {

  const manejarCambio = (e) => {
    console.log("cambio a :", e.target.value)
    props.actualizarSeccionHome(e.target.value)
  }

  return <div className="opcionesCat">
    <label>Opciones Home</label>
    <select value={props.valor} onChange={manejarCambio}>
      <option value="" disabled defaultValue="" hidden>Selecionar tipo promoción</option> {/*seria la primera option pero queda desabilitada */}
      {props.homeSecciones.map((seccionHom, index) => <option key={ index } value={seccionHom}>{seccionHom}</option>)}
      
    </select>

  </div>
}

export default OpcionesHome

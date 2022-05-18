import React, { useState } from 'react'
import { saveData } from '../Data/firebase-config'
import Nav from './Nav'

const Data = () => {

  const [event, setEvent] = useState(null)

  const saveEvent = (e) => {
    e.preventDefault();
    saveData(event);
  }

  return (
    <div>
      <div>
        <Nav />
      </div>
      <form class="spacingData">
        <div className="form-group col-md-4 mx-auto">
          <label for="exampleFormControlSelect1">Tipo de Evento</label>
          <select className="form-control btn-outline-primary" id="exampleFormControlSelect1" onChange={e => setEvent(e.target.value)}>
            <option >Situación de riesgo</option>
            <option >Incidente menor</option>
            <option >Horarios</option>
          </select>
        </div>
        <div className="form-group col-md-4 mx-auto">
          <label for="exampleFormControlTextarea1">Describa el Evento</label>
          <textarea className="form-control btn-outline-primary" id="exampleFormControlTextarea1" rows="3" onChange={e => setEvent(e.target.value)}></textarea>
          <button className='className="btn btn-primary mt-4' onClick={saveEvent}>Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default Data;
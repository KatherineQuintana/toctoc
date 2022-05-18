import React, { useState } from 'react'
import { saveData } from '../Data/firebase-config'
import Nav from './Nav'

const Data = () => {

  const [event, setEvent] = useState(null)

  const saveEvent = () => {
    saveData(event);
  }

  return (
    <div>
      <div>
        <Nav />
      </div>
      <form class="spacing">
        <div className="form-group col-md-4 mx-auto">
          <label for="exampleFormControlSelect1">Tipo de Evento</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group col-md-4 mx-auto">
          <label for="exampleFormControlTextarea1">Describa el Evento</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setEvent(e.target.value)}></textarea>
          <button className='mt-4' onClick={saveEvent}>Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default Data;
import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
      <><Nav />
      <div className="card bg-dark text-white">
          <img src="https://user-images.githubusercontent.com/89401079/168947571-b174bfa6-0e09-43c5-8a0c-fb58c736854e.png" className="card-img row-fluid" alt="..."></img>
          <div className="card-img-overlay">
              <h1 className='text-center text-dark'>Bienvenidos</h1>
              <form className='mx-auto'>
                  <div className="form-group col-md-4 mx-auto mt-5">
                      <label for="exampleInputEmail1" className='text-dark'>Email</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" />
                  </div>
                  <div className="form-group col-md-4 mx-auto mt-4">
                      <label for="exampleInputPassword1" className='text-dark'>Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                  </div>
                  <div className='d-flex justify-content-center mt-4'>
                  <button type="submit" className="btn btn-primary">Ingresar</button>
                  </div>
              </form>
          </div>
      </div></>
  )
}

export default Home
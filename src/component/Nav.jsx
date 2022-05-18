import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <strong className="navbar-brand" >Banco Seguridad</strong>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/Home" className="btn btn-primary btn-lg"> Home </Link>
              </li>
              <hr />
              <li className="nav-item">
                <Link to="/Graphics" className="btn btn-primary btn-lg"> Gráfico </Link>
              </li>
              <hr />
              <li className="nav-item">
                <Link to="/Ingress" className="btn btn-primary btn-lg"> Registrar </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>;
}

export default Nav
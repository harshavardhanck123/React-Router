import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-white text-center font-family fixed-top text-muted ">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">ALL</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/fullstack">FULL STACK DEVELOPMENT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/datascience">DATA SCIENCE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cyber">CYBER SECURITY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">CAREER</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home
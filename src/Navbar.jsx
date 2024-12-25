import React, { Component } from 'react'
import { Link ,} from 'react-router-dom'

const Navbar =(props)=>{
  
    const { mode, toggleMode } = props;
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg  navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand">NEWS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/general">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
              </ul>
            </div>
            <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onChange={toggleMode}
            defaultChecked={mode === 'dark'}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </label>
        </div>
          </div>
        </nav>
       
      </div>
    ); 
  
}
export default Navbar 
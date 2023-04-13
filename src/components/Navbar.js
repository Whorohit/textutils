import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"

export default function Navbar(prop) {
  
  return (
    <nav className="topic" id="toipc">
      <ul className="topicinside" id="topicinside" style={{backgroundColor:prop.mystyle}}>
        <li className="nametopic "><Link to="/" style={{color:prop.mystyle2}}>Home</Link></li>
        <li className="nametopic "><Link to="/" style={{color:prop.mystyle2}} >{prop.method} method</Link></li>
        <li className="nametopic" id="nametopic3"><Link to="/" style={{color:prop.mystyle2}} >{prop.title}</Link></li>
        <li className="nametopic"><Link to="/" style={{color:prop.mystyle2}}>{prop.Array}</Link></li>
        <li className="nametopic"><Link to="/"style={{color:prop.mystyle2}} >Help</Link></li>
        <li className="nametopic"><div className="form-check form-switch" >
          <input className="form-check-input" type="checkbox" onClick={prop.togglechange} style={{color:prop.mystyle2}} id="flexSwitchCheckDefault"/>
            <label className={` form-check-label fs-6`} htmlFor="flexSwitchCheckDefault"style={{color:prop.mystyle2}} >{prop.modes}</label>
        </div></li>
      </ul>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  Array: PropTypes.string.isRequired,

}
Navbar.defaultProps = {
  method: "string method",
  title: "Texutils",
  Array: "Array method",
}
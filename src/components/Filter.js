import React from "react"
import { Link } from "react-router-dom";

export default function Filter() {
  return (
      <div className="filter">
        <Link to="/"><p>Alle</p></Link>
        <Link to="/available"><p>Verfügbar</p></Link>
        <Link to="/Saved"><p>Vorgemerkt</p></Link>
      </div>
  ) 
}
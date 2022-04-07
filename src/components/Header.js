import React from "react"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header">
        <Link to="/"><p className="apptitle" >Nyris</p></Link>
      </div>
    </div>
  ) 
}
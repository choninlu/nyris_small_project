import React from "react"
import Header from "../components/Header"
import Filter from "../components/Filter"
import Title from "../components/Title"
import { Link } from "react-router-dom";



export default function Saved(props) {

  return (
    <div className="container">
      <Header />
      <Filter />
      <Title />
    </div>
      
  ) 
}
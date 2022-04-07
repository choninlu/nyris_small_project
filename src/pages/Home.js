import React from "react"
import Header from "../components/Header"
import Filter from "../components/Filter"
import Title from "../components/Title"

export default function Home(props) {
  return (
    <div className="container">
      <Header />
      <Filter />
      <Title />
      {props.renderProducts}
    </div>
      
  ) 
}
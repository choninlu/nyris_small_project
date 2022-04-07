import React from "react"
import Header from "../components/Header"
import Filter from "../components/Filter"
import Title from "../components/Title"
import ProductDetail from "../components/ProductDetail"

export default function ProductOverview(props) {
  
  let pID = props.productID

  //const drawPO = (pID != undefined) ? props.renderProductOverview : return 0

  const drawPO = props.renderProductOverview
  return (
    <div className="container">
      <Header />
      {props.renderProductOverview}
    </div>
  ) 
}
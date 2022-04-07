import React from "react"
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export default function ProductTile(props) {

  const style = {
    color: "gray"
  }

  const rightStyle = {
    marginRight: "0px",
    marginLeft: "20px"
  }
  const stars = 
    <ReactStars 
      edit={false}
      value={props.stars}
      isHalf={true}
      />

  const productAvailable = 
  <div className="productTile--container" onClick={() => props.getId(props.id)}>
      <Link to="/productoverview"><img className="productTile--img" src={props.imageURL} /></Link>
      <div className="productTile--text--container">
        
        <div className="productTile--title--container">
        <Link to="/productoverview"><p className="productTile--title">{props.name}</p></Link>
          <p className="productTile--date">{props.releaseDate}</p>
        </div>
        
        <p className="productTile--description">{props.description}]</p>
        
        <div className="productTile--price--container">
          <p className="productTile--price">Preis: <span style={style}>{props.price} Eur</span></p>
          <p className="productTile--stars">{stars}</p>
        </div>
      </div>
    </div>

  const productNotAvailable = 
  <div className="productTile--container" onClick={() => props.getId(props.id)}>
    <div className="productTile--text--right--container">
      
      <div className="productTile--title--container">
      <Link to="/productoverview"><p className="productTile--title">{props.name}</p></Link>
        <p className="productTile--date">{props.releaseDate}</p>
      </div>
      
      <p className="productTile--description">{props.description}]</p>
      
      <div className="productTile--price--container">
        <p className="productTile--price">Preis: <span style={style}>{props.price} Eur</span></p>
        <p className="productTile--stars">{stars}</p>
      </div>
    </div>
    <Link to="/productoverview" id={props.id} style={rightStyle}><img className="productTile--img" src={props.imageURL} /></Link>
  </div>

  const drawProducts = props.available ? productAvailable : productNotAvailable

  return (
    <div>
      {drawProducts}
    </div>
    
  ) 
}
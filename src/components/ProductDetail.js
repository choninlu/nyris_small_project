import React from "react"
import ReactStars from "react-rating-stars-component"

export default function ProductDetail(props) {

  const stars = 
  <ReactStars 
    edit={false}
    value={props.stars}
    isHalf={true}
    />

    const style = {
      color: "gray"
    }

    function handleClick() {
      console.log("Button clicked!")
    }
  return (
    <div>
      <div className="pd--main--container">
        <div className="pd--textimg--container">
          <img className="pd--img"src={props.imageURL} />
          <div className="pd--text--container">
            <p className="pd--name">{props.name}</p> 
            <p className="pd--price">Preis: <span style={style}>{props.price} Eur</span></p>
            <div className="pd--rating--container"> 
              <p className="pd--rating">{stars}</p>
              <p className="pd--releasedate">{props.releaseDate}</p>
            </div>
          </div>
        </div>
        
        <p className="pd--description">{props.description}</p>
        <button className="pd--button" onClick={handleClick}>Vormerken</button>
        <p>Beschreibung</p>
        <p className="pd--longdescription">{props.longDescription}</p>
      </div> 
    </div>
  ) 
}
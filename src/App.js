import React from "react"
import ProductTile from "./components/ProductTile"
import ReactStars from "react-rating-stars-component";
import ProductDetail from "./components/ProductDetail"
import ReactDOM from "react-dom"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ProductOverview from "./pages/ProductOverview";
import Available from "./pages/Available";
import Saved from "./pages/Saved";

export default function App() {

  const [products, setProducts] = React.useState([])

  const [productID, setProductID] = React.useState(undefined)

  const [saved, setSaved] = React.useState([])
  

  React.useEffect(function() {
    console.log("Effect ran")
    fetch("https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json")
        .then(res => res.json())
        .then(data => {
          console.log(data.products)
          setProducts(data.products)})
  }, [])


  function getId(id) {
    setProductID(id)
    console.log(productID)
  }

  function formatDate(date)  {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day, month, year].join(".");
  }

  const renderProductOverview = products.map((item) => {
    if (item.id === productID) {
      return (
        <ProductDetail
          name={item.name} 
          imageURL={item.imageURL} 
          releaseDate={formatDate(new Date(item.releaseDate))} 
          description={item.description} 
          price={item.price.value} 
          stars={item.rating}
          available={item.available} 
          getId={getId}
          id={item.id}
          key={item.id}
          longDescription={item.longDescription}
          />
      )
    }
  })

  const renderProducts = products.map((item) => {
      return (
      <ProductTile 
        name={item.name} 
        imageURL={item.imageURL} 
        releaseDate={formatDate(new Date(item.releaseDate))} 
        description={item.description} 
        price={item.price.value} 
        stars={item.rating}
        available={item.available} 
        getId={getId}
        id={item.id}
        key={item.id}
        />)
  })

  const renderAvailableProducts = products.map((item) => {
    if(item.available === true) {
      return (
        <ProductTile 
          name={item.name} 
          imageURL={item.imageURL} 
          releaseDate={formatDate(new Date(item.releaseDate))} 
          description={item.description} 
          price={item.price.value} 
          stars={item.rating}
          available={item.available} 
          getId={getId}
          id={item.id}
          key={item.id}
          />
      )
    } 
  })
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home renderProducts={renderProducts}/>} />
        <Route path="/productoverview" element={<ProductOverview renderProductOverview={renderProductOverview}/>} />
        <Route path="/available" element={<Available renderAvailableProducts={renderAvailableProducts}/>} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  ) 
}
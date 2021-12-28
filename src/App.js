import react from "react";
import { useState, useEffect } from "react";

//Components 
import Navbar from "./Components/Button/Navigation/Navbar";
import Products from "./Components/Button/Products/Products";

//Commerce instance 
import {commerce} from "./lib/commerce"; 


function App() {
  const [products, setProducts] = useState([]); 

  const fetchProducts = async () => { 
    const {data} = await commerce.products.list(); 
    setProducts(data); 
  }

  useEffect(() => { 
    fetchProducts(); 
  },[])

  console.log(products); 

  return (
    <div className="App">
      <Navbar/>
      <Products/>
    </div>
  );
}

export default App;


//https://www.youtube.com/watch?v=377AQ0y6LPA

//https://dashboard.chec.io/developer/api-keys
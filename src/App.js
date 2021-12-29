import react from "react";
import { useState, useEffect } from "react";

//Components 
import Navbar from "./Components/Navigation/Navbar";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";

//Commerce instance 
import {commerce} from "./lib/commerce"; 

function App() {
  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState({}); 

  //Fetch cartdata from commerce API
  const fetchCart = async () => { 
    setCart(await commerce.cart.retrieve()); 
  }

  //Fetch Productsdata from commerce API 
  const fetchProducts = async () => { 
    const { data } = await commerce.products.list(); 
    setProducts(data); 
  }

  //Function for adding items to the shoppingcart 
  const handleAddToCard = async (productId, quantity) => { 
    const addedItem = await commerce.cart.add(productId, quantity); 
    setCart(addedItem.cart); 
  }

  useEffect(() => { 
    fetchProducts(); 
    fetchCart(); 
  },[])

  console.log(cart)

  return (
    <div className="App">
      <Navbar
      totalItems = {cart.total_items}
      />
      <Products 
      products = {products}
      addProduct = {handleAddToCard}
      />
      <Cart 
      cart = {cart.line_items}
      />
    </div>
  );
}

export default App;


//https://www.youtube.com/watch?v=377AQ0y6LPA

//https://dashboard.chec.io/developer/api-keys
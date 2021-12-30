import react from "react";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components 
import Navbar from "./Components/Navigation/Navbar";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/CheckoutForm/Checkout/Checkout";

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
    const { cart } = await commerce.cart.add(productId, quantity); 
    setCart(cart); 
  }

  //Function for updating cart quantity
  const handleUpdateCartQuantity = async (productId, quantity) => { 
    const { cart } = await commerce.cart.update(productId, {quantity}); 
    setCart(cart);
  }

  //Function for removing items from the cart 
  const handleRemoveItemFromCart = async (productId) => { 
    const { cart } = await commerce.cart.remove(productId); 
    setCart(cart); 
  }

  //Function for emptying the entire cart 
  const handleEmptyCart = async () => { 
    const { cart } = await commerce.cart.empty(); 
    setCart(cart); 
  }

  useEffect(() => { 
    fetchProducts(); 
    fetchCart(); 
  },[])

  return (
      <Router>
         <div className="App">
         <Navbar totalItems = {cart.total_items}/>
          <Routes>
            <Route path = "/" element = {<Products products = {products} addProduct = {handleAddToCard}/>}/>
            <Route 
            path = "/cart" 
            element = {
            <Cart 
            cart = {cart}
            handleUpdateCartQuantity = {handleUpdateCartQuantity}
            handleRemoveItemFromCart = {handleRemoveItemFromCart}
            handleEmptyCart ={handleEmptyCart}
            />
            }/>
            <Route path = "/checkout" element = {<Checkout/>}/>
          </Routes>
        </div>
      </Router>
  );
} 

export default App;


//https://www.youtube.com/watch?v=377AQ0y6LPA

//https://dashboard.chec.io/developer/api-keys
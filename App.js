import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./components/ProductDetail";

const App = () =>{
  return(
    <div className="overflow-x-hidden">
      <div className="bg-slate-900 w-100vw">
        <Navbar/>
      </div>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/cart" element = {<Cart/>} />
        <Route path ="/products/:productID" element = {<ProductDetail/>}/>
      </Routes>
    </div>
  )
    
};

export default App;

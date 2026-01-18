import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Navbar from "./Components/Navbar";
import All from "./Components/All";
import Electronics from "./Components/Electronics";
import Kids from "./Components/Kids";
import Grocery from "./Components/Grocery";
import Cart from "./Components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<All products={products} search={search} addToCart={addToCart} />} />
        <Route path="/electronics" element={<Electronics products={products} search={search} addToCart={addToCart} />} />
        <Route path="/kids" element={<Kids products={products} search={search} addToCart={addToCart} />} />
        <Route path="/grocery" element={<Grocery products={products} search={search} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

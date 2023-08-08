import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Cart from "./components/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home"
import Login from "./components/auth/login";
import SingleItem from "./components/single-item";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<SingleItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

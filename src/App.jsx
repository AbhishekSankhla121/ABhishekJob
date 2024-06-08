import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/layout/Header/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/layout/Footer/Footer";
import Shop from "./Components/Shop/Shop";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop></Shop>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

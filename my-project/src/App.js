import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import { Carousel } from "./components/Carousel"
import { data } from "./components/data"
import { Featurette } from "./components/Featurette"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Popular from "./components/Popular"
import Rooms from "./components/Rooms"
import LoginSignup from "./pages/LoginSignup"
import Product from "./pages/Product"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<><Home /><Carousel data={data}/><Popular /><Featurette /><Featurette /></>} />
          <Route path="/pricing" element={<><Pricing />< Rooms/></>} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<><Login /><LoginSignup /></>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
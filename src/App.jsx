import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import About from "./components/About";
import { ProductProvider } from "./context/ProductContext";
import Featured from "./components/Featured";
import Trending from "./components/Trending";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register"
import { AuthProvider } from "./context/AuthContext";
import ThankYou from "./pages/ThankYou";

function App() {
  const token = localStorage.getItem("auth-token");
  const authToken = { accessToken: token ?? null }
  return (
    <AuthProvider defaultState={authToken}>
    <ProductProvider>
      <Router>
        <Header />
        <ToastContainer position="top-right" autoClose={5000} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <About />
                <Featured />
                <Trending />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
                <Carousel
                  className="lg:h-[20vh] mb-12"
                  flex="hidden"
                  banner="Home/Product"
                  img="/img/c8.jpg"
                />
                <Product />
              </>
            }
          />
          <Route
            path="/details/:id"
            element={<ProductDetails /> }
          />
          <Route
            path="/cart"
            element={<Cart /> }
          />
          <Route
            path="/checkout"
            element={<Checkout /> }
          />
          <Route
            path="/checkout"
            element={<Login /> }
          />
          <Route
            path="/checkout"
            element={<Register /> }
          />
          <Route
            path="/checkout"
            element={<ThankYou /> }
          />
        </Routes>
      </Router>
    </ProductProvider>
    </AuthProvider>
  );
}

export default App;
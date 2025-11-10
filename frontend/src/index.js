import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landingPage/Home/HomePage";
import Signup from "./landingPage/Signup/Signup";
import AboutPage from "./landingPage/About/AboutPage";
import SupportPage from "./landingPage/Support/SupportPage";
import PricingPage from "./landingPage/Pricing/PricingPage";
import ProductsPage from "./landingPage/Products/ProductsPage";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import NotFoundPage from "./landingPage/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

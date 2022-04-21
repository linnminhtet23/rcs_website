import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/about";
import BlogsPage from "./pages/blogs";
import CheckoutPage from "./pages/checkout";
import ContactUsPage from "./pages/contact-us";
import Home from "./pages/index";
import NewsPage from "./pages/news";
import ProductsPage from "./pages/porducts";
import ProductDetailPage from "./pages/porducts/ProductDetail";
import PricingPage from "./pages/pricing";
import ServicesPage from "./pages/services";
import AndroidAppServicePage from "./pages/services/android-application";
import WebAppServicePage from "./pages/services/web-application";
import WebsiteServicePage from "./pages/services/website";

import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      {/* <NavigationMenu /> */}
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/services/website" element={<WebsiteServicePage/>}/>
        <Route path="/services/web-application" element={<WebAppServicePage/>}/>
        <Route path="/services/android-application" element={<AndroidAppServicePage/>}/>
        <Route path="/pricings" element={<PricingPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact-us" element={<ContactUsPage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/blogs" element={<BlogsPage/>}/>
        <Route path="/checkout/:path" element={<CheckoutPage/>}/>
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

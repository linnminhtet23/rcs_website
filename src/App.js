import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import NavigationMenu from "./components/layout/NavigationMenu";
import Home from "./pages/index";
import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

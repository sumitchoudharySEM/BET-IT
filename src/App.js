import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

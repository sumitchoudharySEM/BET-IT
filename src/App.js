import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";

import Footer from "./components/footer";
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/style.css';
import './css/special_classes.css';
import './css/mediaqueries.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
// import './add/magnific-popup.css';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";




function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  return (
    <body>
      
      
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      
      <Footer/>

    </body>
  );
}

export default App;

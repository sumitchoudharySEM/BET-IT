import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";

import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/special_classes.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Coinflipgame from "./components/games/coinflipgame";
import Coinflipgamefront from "./components/games/coinflipfrontend";
import Navbar from "./components/navbar";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <body>
      <div className="banner-section-outer">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="/game/coinflip" element={<Coinflipgame />} />
          <Route path="/coinflip" element={<Coinflipgamefront />} />
        </Routes>
      </div>
      <Footer />
    </body>
  );
}

export default App;

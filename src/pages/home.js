import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// import "../add/aos.css";
import "../add/magnific-popup.css";

import Navbar from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function home() {

  return (
    <div className="banner-section-outer">
    
    <Navbar/>
        {/* SOCIAL ICONS */}
        <div className="left_icons float-left d-table" data-aos="fade-down">
        <div className="icon_content d-table-cell align-middle">
          <ul className="list-unstyled p-0 m-0">
            <li>
              <a href="#"><i className="fa-brands fa-facebook-f" aria-hidden="true" /></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-twitter" aria-hidden="true" /></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-linkedin-in" aria-hidden="true" /></a>
            </li>
            <li className="p-0">
              <a href="#"><i className="fa-brands fa-instagram" aria-hidden="true" /></a>
            </li>
          </ul>
        </div>
      </div>

        {/* BANNER SECTION */}
        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 text-lg-left text-center">
                <div className="banner-section-content">
                  <h1 data-aos="fade-up">
                    A New Place For Professional Gamers
                  </h1>
                  <p data-aos="fade-right">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse dolore eu fugiat nulla pariatur eiusmod.
                  </p>
                  <div className="btn_wrapper" data-aos="fade-down">
                    <a
                      className="text-decoration-none readmore_btn"
                      href="about.html"
                    >
                      Read More
                    </a>
                    <a
                      className="text-decoration-none joinus_btn"
                      href="signup.html"
                    >
                      Join Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12"></div>
            </div>
          </div>
        </section>
      
        </div>
  );
}

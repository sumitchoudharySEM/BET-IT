import React from "react";
import { Link } from 'react-router-dom'
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from '../images/crox_logo.png'; // Import your logo image
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


export default function navbar() {
  return (
    
      
    <header>
        <div className="container navi-cont">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html"><figure className="mb-0"><img src={ logo } alt="" /></figure></a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="games.html">Games</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="gallery.html">Gallery</a>
                </li>
                <li className="m-0">
                  <a className="navbar-brand" href="index.html"><figure className="mb-0"><img src={ logo } alt="" /></figure></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="match_detail.html">Detail</a>
                </li>
                <li className="nav-item mr-0">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
                <li className="nav-item mr-1 ml-0">
                  <a className="nav-link login_btn" href="login.html">Log in</a>
                </li>
                <li className="nav-item ml-0">
                  <a className="nav-link signup_btn" href="signup.html">Sign Up</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    
  );
}

{/* <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <ConnectButton />
      </nav> */}

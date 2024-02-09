import React from "react";
import { Link } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function navbar() {
  return (
    <div>
      navbar
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <ConnectButton />
      </nav>
      <hr />
    </div>
  );
}

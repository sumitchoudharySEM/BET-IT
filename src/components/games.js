import React from "react";
import coinflip from "../images/games/coinflip.webp";
import slot from "../images/games/slot.webp";
import rocket from "../images/games/recket.webp";
import bomb from "../images/games/bomb.webp";
import "../css/custom/games.css";
import { Link } from "react-router-dom";

export default function games() {
  return (
    <>
      {/* TRENDING GAMES SECTION */}
      <section className="trending_games_section">
        <div className="games-container">
          <div className="games-heading">
            <h2>Games</h2>
          </div>
          <div className="games-list-container">
            <div className="games-list">
              <div className="game1 game-itam">
                <Link to="/game/coinflip">
                  <div className="game-image gi1">
                    <img src={coinflip} alt="" />
                  </div>
                </Link>
                <div className="game-info-c">
                  <h5>Coin Flip</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                </div>
              </div>
              <div className="game1 game-itam">
                <div className="game-image gi2">
                  <img src={bomb} alt="" />
                </div>
                <div className="game-info-c">
                  <h5>Bomb Abom</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
              <div className="game1 game-itam">
                <div className="game-image gi3">
                  <img src={rocket} alt="" />
                </div>
                <div className="game-info-c">
                  <h5>Rocket Lonch</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
              <div className="game1 game-itam">
                <div className="game-image gi4">
                  <img src={slot} alt="" />
                </div>
                <div className="game-info-c">
                  <h5>Slot Machine</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

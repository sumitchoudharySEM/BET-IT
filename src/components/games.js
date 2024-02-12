import React from "react";
import coinflip from "../images/games/coinflip.webp";
import "../css/custom/games.css"

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
                    <div className="game-image">
                        <img src={coinflip} alt="" />
                    </div>
                    <div className="game-info-c">
                        <h5>Coinflip</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a!</p>
                    </div>
                </div>
                <div className="game1 game-itam">
                    <div className="game-image">
                        <img src={coinflip} alt="" />
                    </div>
                    <div className="game-info-c">
                        <h5>Coinflip</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a!</p>
                    </div>
                </div>
                <div className="game1 game-itam">
                    <div className="game-image">
                        <img src={coinflip} alt="" />
                    </div>
                    <div className="game-info-c">
                        <h5>Coinflip</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a!</p>
                    </div>
                </div>
                <div className="game1 game-itam">
                    <div className="game-image">
                        <img src={coinflip} alt="" />
                    </div>
                    <div className="game-info-c">
                        <h5>Coinflip</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a!</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

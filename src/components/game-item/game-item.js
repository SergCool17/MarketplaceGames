import React from "react";
import { Gamebuy } from "../game-buy/game-buy";

import { GameCover } from "../game-cover/game-cover";
import { GameGenre } from "../game-genre/game-genre";
import "./game-item.css";

export const GameItem = ({ game }) => {
  return (
    <div className="game-item">
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <Gamebuy game={game} />
        </div>
      </div>
    </div>
  );
};

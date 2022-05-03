import React from "react";
import { Button } from "../button";
import "./game-buy.css";

export const Gamebuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} руб.</span>
      <Button type="primary" onClick={() => null}>
        В корзину
      </Button>
    </div>
  );
};

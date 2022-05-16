import React from "react";
import { Button } from "../button";
import { CartItem } from "../cart-item/cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu_games-list ">
        {items.length
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                id={game.id}
                title={game.title}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length && (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      )}
    </div>
  );
};

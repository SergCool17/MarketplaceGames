import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu/cart-menu";
import { ItemsInCart } from "../items-in-cart/items-in-cart";
import { calcTotalPrice } from "../utils";
import "./cart-block.css";
import { useHistory } from "react-router-dom";

export const CartBlock = () => {
  const [isCartMenuVisible, setCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const history = useHistory();

  const handleClick = useCallback(() => {
    setCartMenuVisible(false);
    history.push("/order");
  }, [history]);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && (
        <CartMenu items={items} onClick={() => handleClick()} />
      )}
    </div>
  );
};

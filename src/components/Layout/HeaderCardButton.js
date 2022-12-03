import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import cartContext from "../store/cart-context";
import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(cartContext);

  const numberOfCartItems = cartCtx.items.reduce((a, b) => {
    return a + b.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;

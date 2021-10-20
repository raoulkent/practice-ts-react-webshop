import { useState } from "react";
import "./styles.css";

type Props = {
  itemsInCart: number;
  clearCart: () => void;
};

const ShoppingCart: React.FC<Props> = (props) => {
  const { itemsInCart, clearCart } = props;

  return (
    <div className="Cart">
      <p>🛒 Items in cart:</p>
      <p>{itemsInCart}</p>
      <button onClick={clearCart}>CLEAR CART</button>
    </div>
  );
};

export default ShoppingCart;

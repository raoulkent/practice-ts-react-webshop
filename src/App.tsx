import "./styles.css";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import ProductCardGrid from "./components/ProductCardGrid/ProductCardGrid";
import cards, { Product } from "./data/cards";
import { Props as ProductCardProps } from "./components/ProductCard/ProductCard";

export default function App() {
  const [itemsInCart, setItemsInCart] = useState(0);

  const clearCart = () => {
    setItemsInCart(0);
  };

  const addProductToCart = (item: ProductCardProps) => {
    setItemsInCart(itemsInCart + 1);
  };

  return (
    <div className="App">
      <Menu itemsInCart={itemsInCart} clearCart={clearCart} />
      <ProductCardGrid cards={cards} addProduct={addProductToCart} />
    </div>
  );
}

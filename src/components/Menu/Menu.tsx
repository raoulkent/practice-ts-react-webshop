import "./styles.css";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

type Props = {
  itemsInCart: number;
  clearCart: () => void;
};

const Menu: React.FC<Props> = (props) => {
  const { itemsInCart, clearCart } = props;

  return (
    <div className="Menu">
      <h1 className="Title">Wacky Doodle Doo</h1>
      <ShoppingCart itemsInCart={itemsInCart} clearCart={clearCart} />
    </div>
  );
};

export default Menu;

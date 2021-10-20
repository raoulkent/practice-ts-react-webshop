import "./styles.css";
import ProductCard, {
  Props as ProductCardProps
} from "../ProductCard/ProductCard";

type Props = {
  cards: ProductCardProps[];
  addProduct: (item: ProductCardProps) => void;
};

const ProductCardGrid: React.FC<Props> = (props) => {
  const { cards } = props;

  return (
    <div className="ProductCardGrid">
      {cards.map((card) => {
        return (
          <ProductCard
            isFavourite={card.isFavourite}
            imageURL={card.imageURL}
            alt={card.imageURL}
            brand={card.brand}
            productName={card.productName}
            price={card.price}
          />
        );
      })}
    </div>
  );
};

export default ProductCardGrid;

import "./styles.css";

import CardText from "./components/CardText/CardText";
import CardImage from "./components/CardImage/CardImage";
import CardFavourite from "./components/CardFavourite/CardFavourite";

export type Props = {
  isFavourite: boolean;
  imageURL: string;
  alt: string;
  brand: string;
  productName: string;
  price: number;
};

const ProductCard: React.FC<Props> = (props) => {
  const { isFavourite, imageURL, alt, brand, productName, price } = props;
  return (
    <div className="ProductCard">
      <div className="ImageArea">
        <CardFavourite isFavourite={isFavourite} />
        <CardImage url={imageURL} alt={alt} />
      </div>
      <CardText extraClassName="Brand">{brand}</CardText>
      <CardText extraClassName="ProductName">{productName}</CardText>
      <CardText extraClassName="Price">{price}$</CardText>
      <button>
        <span role="img" aria-label="shopping cart">
          🛒
        </span>
      </button>
    </div>
  );
};

export default ProductCard;

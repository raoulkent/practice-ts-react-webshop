import "./styles.css";

import { useState } from "react";

type Props = {
  isFavourite: boolean;
};

const CardFavourite: React.FC<Props> = (props) => {
  const { isFavourite } = props;
  const [isFavouriteState, setIsFavouriteState] = useState(isFavourite);

  const toggle = () => {
    setIsFavouriteState(!isFavouriteState);
  };

  return isFavouriteState ? (
    <span
      className="CardFavourite"
      role="img"
      aria-label="A heart"
      onClick={toggle}
    >
      ❤️
    </span>
  ) : (
    <span
      className="CardFavourite"
      role="img"
      aria-label="A broken heart"
      onClick={toggle}
    >
      💔
    </span>
  );
};

export default CardFavourite;

export type Product = {
  isFavourite: boolean;
  imageURL: string;
  alt: string;
  brand: string;
  productName: string;
  price: number;
};

const card1: Product = {
  isFavourite: false,
  imageURL:
    "https://i.kym-cdn.com/photos/images/newsfeed/000/146/551/1310246791001.jpg",
  alt: "A cat in a tophat",
  brand: "Bobbington",
  productName: "Tophat",
  price: 999
};

const card2: Product = {
  isFavourite: false,
  imageURL:
    "https://i.kym-cdn.com/photos/images/newsfeed/000/131/963/1307580949001.jpg",
  alt: "A cute japanese cat",
  brand: "Rainbow",
  productName: "Kawaii",
  price: 13
};

const card3: Product = {
  isFavourite: false,
  imageURL: "https://i.kym-cdn.com/photos/images/newsfeed/000/553/757/bce.png",
  alt: "Partyhatcat",
  brand: "Bling",
  productName: "Party-hat",
  price: 21
};

const card4: Product = {
  isFavourite: false,
  imageURL:
    "https://i.kym-cdn.com/photos/images/newsfeed/000/167/334/1312074168851.jpg",
  alt: "Itsa Mario",
  brand: "Mario",
  productName: "Mustachio",
  price: 29
};

const card5: Product = {
  isFavourite: false,
  imageURL: "https://i.kym-cdn.com/photos/images/newsfeed/000/299/252/2dc.png",
  alt: "Cat ushanka",
  brand: "Russia",
  productName: "Ushanka Deluxe",
  price: 12
};

const cards: Product[] = [card1, card2, card3, card4, card5];

export default cards;

import Book from "./components/Book";
import Pen from "./components/Pen";

const h1 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Road to React",
  price: 2878,
  quantity: 5,
  rating: 4.5
};

const h2 = {
  picUrl: "https://m.media-amazon.com/images/I/71CDMyWkq0L._SY342_.jpg",
  bname: "React Key Concepts",
  price: 2275,
  quantity: 6,
  rating: 5
};

const h3 = {
  picUrl: "https://m.media-amazon.com/images/I/71jfHilAwtL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "JavaScript: The Good Parts",
  price: 999,
  quantity: 4,
  rating: 4.3
};

const h4 = {
  picUrl: "https://m.media-amazon.com/images/I/81WRIZU-EzL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "Learning JavaScript",
  price: 1499,
  quantity: 7,
  rating: 4.6
};


// Pen data

const p1 = {
  picUrl: "https://m.media-amazon.com/images/I/41eHeTMokaL._AC_UL480_FMwebp_QL65_.jpg",
  company: "Mont blanc",
  price: 7000
};

const p2 = {
  picUrl: "https://m.media-amazon.com/images/I/51RZHP7lknL._AC_UL480_FMwebp_QL65_.jpg",
  company: "Pilot",
  price: 180
};

const p3 = {
  picUrl: "https://m.media-amazon.com/images/I/51gO8qocl8L._AC_UL480_FMwebp_QL65_.jpg",
  company: "Pilot Vanishing Point ",
  price: 50000
};


export default function App() {
  return (
    <>
      <h1>Online Book Store</h1>

      <div className="container">

        <Book book={h1} />
        <Book book={h2} />
        <Book book={h3} />
        <Book book={h4} />

        <h1>Pen Store</h1>

        <Pen pen={p1} />
        <Pen pen={p2} />
        <Pen pen={p3} />

      </div>
    </>
  );
}

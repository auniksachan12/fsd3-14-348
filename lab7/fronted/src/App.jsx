
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

function Book(props) {
  console.log(props);

  return (
    <div>
      <img src={props.book.picUrl} alt={props.book.bname} />

      <h1>{props.book.bname}</h1>
      <h2>Price: {props.book.price}</h2>
      <h3>Quantity: {props.book.quantity}</h3>
      <h3>Rating: {props.book.rating}</h3>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Book book={h1} />

      <h1>Hello React</h1>

      <Book book={h2} />
      <Book book={h3} />
      <Book book={h4} />
    </>
  );
}

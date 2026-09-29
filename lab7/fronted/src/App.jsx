
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
      <Book book={h1}/>
      <h1>Hello React</h1>
      <Book book={h2}/>
      <Book book={h2}/>
      <Book book={h2}/>
    </>
  );
}

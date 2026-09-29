
const h1 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Road to React",
  price: 2878,
  quantity: 5,
  rating: 4.5
};

function Book() {
  return (
    <div>
      <img src={h1.picUrl} alt={h1.bname} />

      <h1>{h1.bname}</h1>
      <h2>Price: {h1.price}</h2>
      <h3>Quantity: {h1.quantity}</h3>
      <h3>Rating: {h1.rating}</h3>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Book />
      <h1>Hello React</h1>
      <Book />
      <Book />
      <Book />
    </>
  );
}

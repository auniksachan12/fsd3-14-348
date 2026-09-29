const h1={
  picUrl:"https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"The Road to React",
  price:2878,
  quantity: 5,
  rating:4.5
};


function Book(){
  return (
    <div>
      <img src="https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg"  alt="The Road to React: Your journey to master plain yet pragmatic React.js" />
      <h1>Let us react</h1>
      <h2>Price: 765.00</h2>
      <h3>Quantity: 5</h3>
      <h1>Rating:4.5</h1>
    </div>
  )
}

export default function App(){
  return (
  <>
  <Book />
  <h1>Hello React</h1>
  <Book />
  <Book />
  <Book />
  </>
  )
}
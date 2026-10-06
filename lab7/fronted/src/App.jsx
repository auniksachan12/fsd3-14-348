import Book from "./components/Book";
import Event from "./components/Event";
import Fruit from "./components/Fruit";
import Pen from "./components/Pen";

import { books } from "./data/books";
import { pens } from "./data/pens";

export default function App() {
  return (
    <>
      <h1>Online Book Store</h1>

      <div className="container">
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Book book={books[2]} />
        <Book book={books[3]} />

        <h1>Pen Store</h1>

        <Pen pen={pens[0]} />
        <Pen pen={pens[1]} />
        <Pen pen={pens[2]} />

        <Fruit />
        <Event />
      </div>
    </>
  );
}

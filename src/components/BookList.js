import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import altogic from "../altogic";

const BookList = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [books, setBooks] = useState([]);

  const createNewBook = async (event) => {
    event.preventDefault();
    const result = await altogic.db.model("books").object().create({
      title: title,
      author: author,
      quantity: quantity,
    });
    setBooks([...books, result.data])
    setTitle("");
    setAuthor("");
    setQuantity("");
  };

  useEffect(() => {
    const getBooks = async () => {
      const result = await altogic.db.model("books").get();
      if (!result.errors) {
        setBooks(result.data);
      }
      else {
        console.log(result.errors)
      }
    };
    getBooks();
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={createNewBook}>
          <label>Book Title</label>
          <div>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <label>Authors</label>
          <div>
            <textarea
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          <label>Quantity</label>
          <div>
            <input
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
          <button type="submit" disabled={title === "" && quantity === ""}>
            Add new book
          </button>
        </form>
      </div>
      <h2>Book Lists</h2>
      {books
        ? books.map((book) => (
            <div>
              <Link to={`/books/${book._id}`}>
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.quantity}</div>
                <div>{book.createdAt}</div>
              </Link>
            </div>
          ))
        : null}
    </div>
  );
};

export default BookList;

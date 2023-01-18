import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import altogic from "../altogic";
import { Link } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();

  const [book, setBook] = useState();
  useEffect(() => {
    const getBook = async () => {
      const result = await altogic.db.model("books").object(id).get();
      if (!result.errors) {
        setBook(result.data);
      } else {
        console.log(result.errors);
      }
    };
    getBook();
  }, [id]);
  return (
    <div>
      <Link to="/">Back to Books</Link>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <div>
            <div>{book.author}</div>
          </div>
          <div>{book.quantity}</div>
          <div>{book.createdAt}</div>
        </div>
      ) : null}
    </div>
  );
};

export default SingleBook;

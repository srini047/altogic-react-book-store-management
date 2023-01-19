import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import altogic from "../altogic";
import { Link } from "react-router-dom";

const SingleBook = () => {
  const { _id } = useParams();

  const [book, setBook] = useState(null);
  useEffect(() => {
    const getBook = async () => {
      const result = await altogic.db.model("books").object(_id).get();
      if (!result.errors) {
        setBook(result.data);
      } else {
        console.log(result.errors);
      }
    };
    getBook();
  }, [_id]);
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

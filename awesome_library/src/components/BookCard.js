import { getAllBooks } from "../services/servicesBooks";
import { useEffect, useState } from "react";
import BookCopyCard from "./BookCopyCard";
import "./BookCard.css";

const BookCard = props => {
  const [allBooks, setAllBooks] = useState([]);

  // This useEffect will go elsewhere eventually
  //Here only for testing
  useEffect(() => {
    console.log("fetching data!");

    getAllBooks().then(response => {
      setAllBooks(response);
    });
  }, []);

  const book = allBooks[0];

  return (
    <>
      <div className="bookCard">
        Book
        {console.log(getAllBooks())}
        <div className="bookInfo">
          <div className="header">
            <p>{book.author}</p>
            <h2>{book.title}</h2>
            <p>{book.published.substr(0, 4)}</p>
          </div>
          <p>{book.description}</p>
        </div>
        <div className="bookStatus">
          <h3>Copies in Library</h3>
          {book.copies.map(copy => (
            <BookCopyCard />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookCard;

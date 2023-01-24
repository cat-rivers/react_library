import { getAllBooks, editBook } from "./services/servicesBooks";
import { useEffect, useState } from "react";
import BookCopyCard from "./BookCopyCard";

const BookCard = props => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    console.log("fetching data!");

    getAllBooks().then(books => {
      setAllBooks(books);
    });
  }, []);

  const book = allBooks[0];

  return (
    <div className="bookCard">
      <div className="bookInfo">
        <p>{book.author}</p>
        <h2>{book.title}</h2>
        <p>{book.published}</p>
        <p>{book.description}</p>
      </div>
      <div className="bookStatus">
        <h3>Copies in Library</h3>
        {book.copies.map(copy => (
          <BookCopyCard />
        ))}
      </div>
    </div>
  );
};

export default BookCard;

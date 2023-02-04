/*
import BorrowedBooksCard from "./BorrowedBooksCard.js";
import { useEffect, useContext, useState } from "react";
import { UserIDContext } from "../App.js";
import { getAllBooks } from "../services/servicesBooks.js";


const BorrowedBooks = ({ bookDetails, setBookDetails }) => {
  const user = useContext(UserIDContext);
  
  const borrowedBooks = user.data.books_currently.map((borrowedBook) =>
    bookDetails.filter((book) => book.copies.some((copy) => copy.id == borrowedBook.id)
    )
  );

  const borrowedBookList = borrowedBooks.map((book) => {
    return (
      <BorrowedBooksCard
        key={book.id}
        book={book}
        bookDetails={bookDetails}
        setBookDetails={setBookDetails}
      />
    );
  });

  return (
    <>
      {user.data.books_currently.length === 0 ||
      user.data.books_currently === undefined ? (
        <div>
          <div>
            <br />
            <p>When you borrow a book it will appear here.</p>
          </div>
        </div>
      ) : (
        
          <div className="search-section">{borrowedBookList}</div>
        
      )}
    </>
  );
};

export default BorrowedBooks;
*/

import BorrowedBooksCard from "./BorrowedBooksCard.js";
import { useEffect, useContext, useState } from "react";
import { UserIDContext } from "../App.js";
import { getAllBooks } from "../services/servicesBooks.js";


const BorrowedBooks = ({ bookDetails, setBookDetails }) => {
  const user = useContext(UserIDContext);
 /*
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    getAllBooks().then(books => {
      setBookDetails(books);
    });
  }, []);
  */
  const borrowedBooks = user.data.books_currently.map((borrowedBook) =>
    bookDetails.filter((book) =>
      book.copies.some((copy) => 
      copy.id == borrowedBook.id)
    )
  );
//console.log(borrowedBooks);

  const borrowedBookList = borrowedBooks.map((book) => {
    return <BorrowedBooksCard key = {book.isbn} book = {book} />;
  });

  return (
    <>
      { user.data.books_currently.length === 0
      ? <p>You currently don't have any borrowed books.</p>
      : <>
          <h4>Your books:</h4>
          <div className = "search-section"> {borrowedBookList} </div>
        </>
      }
    </>
  );
};

export default BorrowedBooks;

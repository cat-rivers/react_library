import BorrowedBooksCards from "./BorrowedBooksCards.js";
import { useEffect, useContext, useState } from "react";
import { UserIDContext } from "../App.js";
import { getAllBooks } from "../services/servicesBooks.js";

const BorrowedBooks = () => {
  const user = useContext(UserIDContext);
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    getAllBooks().then(books => {
      setBookDetails(books);
    });
  }, []);
  
  const borrowedBooks = user.data.books_currently.map((borrowedBook) =>
    bookDetails.filter((book) =>
      book.copies.some((copy) => 
      copy.id == borrowedBook.id)
    )
  );

  const borrowedBookList = borrowedBooks.map((book) => {
    return <BorrowedBooksCards key = {book.isbn} book = {book} />;
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

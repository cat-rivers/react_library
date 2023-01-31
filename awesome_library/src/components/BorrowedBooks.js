import BorrowedBooksCards from "./BorrowedBooksCards.js";
import { useContext } from "react";
import { UserIDContext } from "../App.js";

const BorrowedBooks = ({ bookDetails }) => {
  const user = useContext(UserIDContext);
  const borrowedBooks = user.data.books_currently.map((borrowedBookId) => {
    console.log(borrowedBookId);
    bookDetails.map((book) => {
      book.copies.map((copy) => {
        console.log(copy.id);
        if (copy.id === borrowedBookId)
          return (
            <BorrowedBooksCards key={book.id} book={book} copy={book.copy} />
          );
        else console.log("no ei nyt menny oikein");
      });
    });
  });

  return <div className="search-section">{borrowedBooks}</div>;
};

export default BorrowedBooks;

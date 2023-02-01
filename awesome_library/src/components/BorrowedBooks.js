import BorrowedBooksCards from "./BorrowedBooksCards.js";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import Scroll from "./Scroll.js";

const BorrowedBooks = ({ bookDetails }) => {
  const user = useContext(UserIDContext);
  const borrowedBooks = user.data.books_currently.map((borrowedBook) =>
    bookDetails.filter((book) =>
      book.copies.some((copy) => copy.id == borrowedBook.id)
    )
  );
  const borrowedBookList = borrowedBooks.map((book) => {
    return <BorrowedBooksCards key={book.isbn} book={book} />;
  });
  return (
    <>
      {user.data.books_currently ? (
        <div>
          <div>
            <br />
            <p>When you borrow a book it will appear here.</p>
          </div>
        </div>
      ) : (
        <Scroll>
          <div className="search-section">{borrowedBookList}</div>
        </Scroll>
      )}
    </>
  );
};

export default BorrowedBooks;

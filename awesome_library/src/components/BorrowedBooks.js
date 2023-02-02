import BorrowedBooksCard from "./BorrowedBooksCard.js";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import Scroll from "./Scroll.js";

const BorrowedBooks = ({ bookDetails, setBookDetails }) => {
  const user = useContext(UserIDContext);
  const borrowedBooks = user.data.books_currently.map((borrowedBook) =>
    bookDetails.filter((book) =>
      book.copies.some((copy) => copy.id == borrowedBook.id)
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
        <Scroll>
          <div className="search-section">{borrowedBookList}</div>
        </Scroll>
      )}
    </>
  );
};

export default BorrowedBooks;

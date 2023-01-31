import BorrowedBooksCards from "./BorrowedBooksCards.js";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import Scroll from "./Scroll.js";

const BorrowedBooks = ({ bookDetails }) => {
  const user = useContext(UserIDContext);
  console.log(user.data.books_currently);
  const borrowedBooks = user.data.books_currently.map((borrowedBook) =>
    bookDetails.filter((book) =>
      book.copies.some((copy) => copy.id == borrowedBook.id)
    )
  );
  console.log(borrowedBooks);
  const borrowedBookList = borrowedBooks.map((book) => {
    console.log(book);
    return <BorrowedBooksCards key={book.isbn} book={book} />;
  });
  return (
    <Scroll>
      <div className="search-section">{borrowedBookList}</div>
    </Scroll>
  );
};

export default BorrowedBooks;

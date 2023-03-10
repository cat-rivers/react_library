import BorrowedBooksCard from "./BorrowedBooksCard.js";
import { useContext } from "react";
import { UserIDContext } from "../App.js";

import _uniqueId from 'lodash/uniqueId';

const BorrowedBooks = ({ bookDetails, setBookDetails }) => {
  const user = useContext(UserIDContext);

  const borrowedBooks = user.data.books_currently.map(borrowedBook =>
    bookDetails.filter(book => 
      book.copies.some(copy => copy.id.toString() === borrowedBook.id.toString())
    )
  );

  const borrowedBookList = borrowedBooks.map((book) => {
    const id = _uniqueId('prefix-');
    return <BorrowedBooksCard key={id} book={book} />;
  });

  return (
    <>
      {user.data.books_currently.length === 0 ? (
        <p>You currently don't have any borrowed books.</p>
      ) : (
        <>
          <h4>Your books:</h4>
          <div className="search-section"> {borrowedBookList} </div>
        </>
      )}
    </>
  );
};

export default BorrowedBooks;

import BorrowedBooksCards from "./BorrowedBooksCards.js";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import Scroll from "./Scroll.js";

const BorrowedBooks = () => {
  const user = useContext(UserIDContext);

  const bookDetails = [];

  const borrowedBooks = user.data.books_currently.map((borrowedBook) =>
    bookDetails.filter((book) =>
      book.copies.some((copy) => copy.id == borrowedBook.id)
    )
  );

  console.log("user: "+user.data.name);
  console.log("b cur: "+user.data.books_currently[0].id);
  console.log("lainat: "+borrowedBooks);
/*
  const borrowedBookList = borrowedBooks.map((book) => {
    return <BorrowedBooksCards key={book.isbn} book={book} />;
  });
*/
  
  const borrowedBookList = () => {
    return(<>JEEEE</>);
  }


  return (
    <>
      {user.data.books_currently ? (
        <div>
          <div>
            <br />
            <p>When you borrow a book it will appear here.{borrowedBooks}</p>
          </div>
        </div>
      ) : (
        <Scroll>
          <div className="search-section">{borrowedBooks}</div>
        </Scroll>
      )}
    </>
  );
};

export default BorrowedBooks;

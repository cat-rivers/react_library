import BorrowedBooksCards from "./BorrowedBooksCards.js";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import { getBook } from "../services/servicesBooks.js";

import {  useEffect } from "react";


const BorrowedBooks = () => {
  const user = useContext(UserIDContext);

  const bookDetails = [];

  const borrowedBooks = user.data.books_currently.map((borrowedBook) =>
    bookDetails.filter((book) =>
      book.copies.some((copy) => copy.id == borrowedBook.id)
    )
  );

/*
let borrowedBooks = [];
  
  user.data.books_currently.forEach(book => {
    borrowedBooks.push(getBook(book.id));
  });

  useEffect(() => {
    user.data.books_currently.forEach(book => {
      borrowedBooks.push(getBook(book.id));
    });
  

  }, []);




console.log("user: "+user.data.name);
console.log(borrowedBooks);
console.log('-----------------');
*/

//console.log("b cur: "+user.data.books_currently[0].id);
  //console.log("lainat: "+borrowedBooks);
/*
  const borrowedBookList = borrowedBooks.map((book) => {
    return <BorrowedBooksCards key={book.isbn} book={book} />;
  });
*/
  
  const borrowedBookList = () => {
    return(
      <>
      yks kirja<br/>
      toinen kirja<br/>
      kolmas kirja
    </>
    );
  }

  return (
    <>
      { user.data.books_currently.length === 0
      ? <div>
          <p>You currently don't have any borrowed books.</p>
        </div>
      : 
        <>
          <h4>Your books:</h4>
          <div className="search-section" style = {{ overflowY: "auto", height: "60vh" }}>
            {borrowedBookList()}
          </div>
        </>
      }
    </>
  );
};

export default BorrowedBooks;

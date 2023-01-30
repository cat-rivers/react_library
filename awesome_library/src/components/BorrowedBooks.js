import BorrowedBooksCards from "./BorrowedBooksCards.js";
// import { useContext } from "react";
// import { UserIDContext } from "../App.js";

const BorrowedBooks = ({ bookDetails }) => {
  const user = {
    name: "Rene Orosz",
    password: "hunter12",
    id: "12345678",
    books_currently: [{ isbn: "0679722769" }, { isbn: "9781449337711" }],
  };
  console.log(user.books_currently);
  console.log(bookDetails);
  const borrowedBooks = user.books_currently.map((borrowedBook) => {
    bookDetails.filter((book) => book.isbn === borrowedBook.isbn);
  });
  console.log(borrowedBooks);
  const printBooks = borrowedBooks.map((book) => (
    <BorrowedBooksCards key={book.id} book={book} />
  ));

  //   const user = useContext(UserIDContext);

  //   const borrowedBook = bookDetails.map((book) => {
  //     console.log(book.copies[0].status);
  //     // for (let i = 0; i <= book.copies.length; i++) {
  //     if (book.copies[0].status === "borrowed") {
  //       if (book.copies[0].borrower_id === "12345678") book = true;

  //       return <BookCard key={book.id} book={book} />;
  //     }
  // }
  //This works like this but why userID instead of "12345678"
  //and for loop to loop through the copies don't work is beyond me
  //   });
  return <div className="search-section">{printBooks}</div>;
};

export default BorrowedBooks;

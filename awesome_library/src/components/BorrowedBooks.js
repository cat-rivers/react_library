import BookCard from "./BookCard.js";

const BorrowedBooks = ({ bookDetails, userID }) => {
  console.log(userID);
  const borrowedBook = bookDetails.map((book) => {
    console.log(book.copies[0].status);
    // for (let i = 0; i <= book.copies.length; i++) {
    if (book.copies[0].status === "borrowed") {
      if (book.copies[0].borrower_id === "12345678")
        return <BookCard key={book.id} book={book} />;
    }
    // }
  });
  return <div className="search-section">{borrowedBook}</div>;
};

export default BorrowedBooks;

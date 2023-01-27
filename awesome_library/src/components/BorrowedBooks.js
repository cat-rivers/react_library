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
    //This works like this but why userID instead of "12345678"
    //and for loop to loop through the copies don't work is beyond me
  });
  return <div className="search-section">{borrowedBook}</div>;
};

export default BorrowedBooks;

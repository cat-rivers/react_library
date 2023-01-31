import "./BookCard.css";

const BorrowedBooksCards = ({ book, copy }) => {
  return (
    <>
      <div className="bookInfo">
        <div className="header">
          <p>{book.author}</p>
          <h2>{book.title}</h2>
        </div>
      </div>
      <div className="bookStatus">
        <h3>Borrowed by you until: {copy.due_date}</h3>
        {/* <button onClick={returnBook}>Return book</button> */}
      </div>
    </>
  );
};

export default BorrowedBooksCards;

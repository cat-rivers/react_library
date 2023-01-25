import BookCopyCard from "./BookCopyCard";
import "./BookCard.css";

const BookCard = ({ book }) => (
  <div className="bookCard">
    <div className="bookInfo">
      <div className="header">
        <p>{book.author}</p>
        <h2>{book.title}</h2>
        <p>{book.published.substr(0, 4)}</p>
      </div>
      <p>{book.description}</p>
    </div>
    <div className="bookStatus">
      <h3>Copies in Library</h3>
      <BookCopyCard copies={book.copies} />
    </div>
  </div>
);

export default BookCard;

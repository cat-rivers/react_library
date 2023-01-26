import "./BookCard.css";
import SearchModal from "./SearchModal";

const BookCard = ({ book }) => {
  return (
    <div className="bookCard">
      <div className="bookInfo">
        <div className="header">
          <p>{book.author}</p>
          <h2>{book.title}</h2>
        </div>
        <p>{book.description.substring(0, 200)}...</p>
      </div>
      <SearchModal />
    </div>
  );
};

export default BookCard;

import BookCopyCard from "./BookCopyCard";
import "./BookCard.css";
import SearchModal from "./SearchModal";
import { useState } from "react";

const BookCard = ({ book }) => {
  const [isModalOn, setIsModalOn] = useState(false);
  const bigBookCard = () => {
    return (
      <div className="bookCard">
        <button onClick={() => setIsModalOn(false)}>close</button>
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
  };

  const bookPreviewCard = () => {
    return (
      <div className="bookCard">
        <div className="bookInfo">
          <div className="header">
            <p>{book.author}</p>
            <h2>{book.title}</h2>
          </div>
          <p>{book.description.substring(0, 200)}...</p>
        </div>
        <button
          className="modalBookBtn"
          onClick={() => {
            setIsModalOn(true);
          }}
        >
          {" "}
          More..
        </button>
        <SearchModal />
      </div>
    );
  };
  return isModalOn ? bigBookCard() : bookPreviewCard();
};

export default BookCard;

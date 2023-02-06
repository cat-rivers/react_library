import SearchBookCopyCard from "./SearchBookCopyCard";
import "./BookCard.css";
import { useState } from "react";
import Modal from "react-modal";

const SearchBookCard = ({ book }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("#root");
  const closeModal = () => setModalIsOpen(false);
  const available = book.copies.find(copy => copy.status === "in_library") !== undefined;

  const customStyles = {
    content: {
      inset: "50% auto auto 50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      backgroundColor: "white",
      border: "5px solid black",
      overflow: "scroll",
    },
  };

  const bigBookCard = () => {
    return (
      <div className="book-card">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        <div className="bookInfo">
          <div className="header">
            <p>{book.author}</p>
            <h3>{book.title}</h3>
            <p>{book.published.substr(0, 4)}</p>
          </div>
          <p>{book.description}</p>
        </div>
        <div className="bookStatus">
          <h4>Copies:</h4>
          <SearchBookCopyCard book={book} />
        </div>
      </div>
    );
  };
  
  const bookPreviewCard = () => {
    return (
      <div
        onClick={() => {
          setModalIsOpen(true);
        }}
      > 
      {available === true
        ? (<div className="searchResults">{book.author}: {book.title}</div>)
        : (<div className="searchResultsUnavailable">{book.author}: {book.title}</div>)
      }
      </div>
    );
  };

  return (
    <>
      {bookPreviewCard()}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Individual book page from search results"
        style={customStyles}
      >
        {bigBookCard()}
      </Modal>
    </>
  );
};

export default SearchBookCard;

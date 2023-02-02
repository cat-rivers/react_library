import BookCopyCard from "./BookCopyCard";
import "./BookCard.css";
import { useState } from "react";
import Modal from "react-modal";

const BookCard = ({ book }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("#root");
  const closeModal = () => setModalIsOpen(false);

  const customStyles = {
    content: {
      inset: "40% auto auto 50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      border: "1px solid black",
    },
  };

  const bigBookCard = () => {
    return (
      <>
        <button onClick={closeModal}>close</button>
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
      </>
    );
  };

  const bookPreviewCard = () => {
    return (
      <div
        className="searchResults"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        {book.author}: {book.title}
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

export default BookCard;

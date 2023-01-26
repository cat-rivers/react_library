import Modal from "react-modal";
import { useState } from "react";
import "./SearchModal.css";

const SearchModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("#root");
  const closeModal = () => setModalIsOpen(false);

  const customStyles = {
    content: {
      inset: "30% auto auto 50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
  };

  return (
    <>
      <button className="modal-button" onClick={() => setModalIsOpen(true)}>
        See full info
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Individual book page from search results"
        style={customStyles}
      >
        <h3>Book title here or something</h3>
      </Modal>
    </>
  );
};

export default SearchModal;

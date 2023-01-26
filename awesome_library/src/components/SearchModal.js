import Modal from "react-modal";
import { useState } from "react";
import BigBookCard from "./BigBookCard";
// import "./SearchModal.css";

const SearchModal = (BigBookCard) => {
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
      <button onClick={() => setModalIsOpen(true)}></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Individual book page from search results"
        style={customStyles}
      >
        <BigBookCard />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default SearchModal;

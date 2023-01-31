import Modal from "react-modal";
import { useState } from "react";
import "./LogoffPopup.css";

const LogoffPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("#root");
  const closeModal = () => setModalIsOpen(false);

  const customStyles = {
    content: {
      inset: "40% auto auto 50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
  };

  return (
    <>
      <div className="navbarlink" onClick={() => setModalIsOpen(true)}>
        Logout
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Logout"
        style={customStyles}
      >
        <h1>Log Out?</h1>
        <form>
          <h3>Are you sure want to log out?</h3>
          <br />
        </form>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={closeModal}>Log out</button>
      </Modal>
    </>
  );
};
export default LogoffPopup;

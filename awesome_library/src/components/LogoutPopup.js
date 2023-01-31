import Modal from "react-modal";
import { useState, useContext } from "react";
import { UserIDContext } from "../App";
import "./LogoutPopup.css";
import { useNavigate } from "react-router-dom";

const LogoutPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  Modal.setAppElement("#root");

  const closeModal = () => {
    setModalIsOpen(false);
    userData.set(null);
    navigate("/");
  };
  const userData = useContext(UserIDContext);

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
        Log Out
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="logout"
        style={customStyles}
      >
        <h1>Log Out?</h1>
        <form>
          <h3>User: </h3>
          <h3>Are you sure want to log Out?</h3>
          <br />
        </form>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={closeModal}>Log Out</button>
      </Modal>
    </>
  );
};
export default LogoutPopup;

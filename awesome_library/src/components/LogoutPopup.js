import Modal from "react-modal";
import { useState, useContext } from "react";
import { UserIDContext } from "../App";
import "./LogoutPopup.css";
import { useNavigate } from "react-router-dom";

const LogoutPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  Modal.setAppElement("#root");

  const closeModalLogOut = () => {
    setModalIsOpen(false);
    userData.set(null);
    navigate("/");
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const userData = useContext(UserIDContext);

  const customStyles = {
    content: {
      inset: "40% auto auto 50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      border: "1px solid black",
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
        <div className="logout-modal">
          <button className="close-btn" onClick={closeModal}>
            X
          </button>
          <div className="modal-body">
            <h3>Are you sure want to Log Out?</h3>

            <button
              className="logout-btn"
              onClick={closeModalLogOut}
              title="Logging Out"
            >
              Log Out
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default LogoutPopup;

import Modal from "react-modal";
import "./SignupPopup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupSuccessful = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const navigate = useNavigate();

  Modal.setAppElement("#root");
  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/mypage");
  };

  const customStyles = {
    content: {
      inset: "30% auto auto 50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="SignupSuccess"
        style={customStyles}
      >
        <button onClick={closeModal}>X</button>
        <h3>Signup</h3>
        <h3>Successful!</h3>
      </Modal>
    </>
  );
};

export default SignupSuccessful;

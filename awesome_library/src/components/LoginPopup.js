import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import "./LoginPopup.css";
import { UserIDContext } from ".././App";
import { checkCredentials } from "../services/servicesBooks";

const LoginPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hasError, setError] = useState(false);
  const userData = useContext(UserIDContext);
  const navigate = useNavigate();

  Modal.setAppElement("#root");
  const closeModal = () => {
    setModalIsOpen(false);
    setError(false);
  };

  const customStyles = {
    content: {
      inset: "30% auto auto 50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      border: "1px solid black",
    },
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkCredentials(e.target.inputId.value, e.target.password.value).then(
      user => {
        if (user) {
          userData.set(user);
          navigate("/mypage");
        } else {
          setError(true);
        }
      }
    );
  };

  return (
    <>
      <div className="navbarlink" onClick={() => setModalIsOpen(true)}>
        Log in
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login"
        style={customStyles}
      >
        <div className="login-modal">
          <button className="close-btn" onClick={closeModal}>
            X
          </button>

          <h3>Log in</h3>

          <form onSubmit={handleSubmit}>
            <label for="inputId">ID number:</label>
            <br />
            <input type="text" id="inputId" name="inputId" />
            <br />
            <label for="password">Password:</label>
            <br />
            <input type="password" id="password" name="password" />
            <br />
            {hasError ? "Login Failed! Try Again!" : ""}
            <br />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default LoginPopup;

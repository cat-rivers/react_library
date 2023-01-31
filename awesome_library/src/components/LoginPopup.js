import Modal from "react-modal";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import "./LoginPopup.css";
import { UserIDContext } from ".././App";
import { checkCredentials } from "../services/servicesBooks";

const LoginPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hasError, setError] = useState(false);
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
    },
  };

  const fakeUserData = useContext(UserIDContext);

  return (
    <>
      <div className="navbarlink" onClick={() => setModalIsOpen(true)}>
        Login
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login"
        style={customStyles}
      >
        <h3>Login</h3>

        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(e.target.inputId.value, e.target.password.value);
            checkCredentials(
              e.target.inputId.value,
              e.target.password.value
            ).then(user => {
              if (user) {
                fakeUserData.set(user);
                navigate("/mypage");
              } else {
                setError(true);
              }
            });
          }}
        >
          <button onClick={closeModal}>Close</button>
          <label for="inputId">Id number:</label>
          <br />
          <input
            defaultValue={12345678}
            type="text"
            id="inputId"
            name="inputId"
          />
          <br />
          <label for="password">Password:</label>
          <br />
          <input
            defaultValue={"hunter12"}
            type="password"
            id="password"
            name="password"
          />
          <br />
          {hasError ? "Login Failed! Try Again!" : ""}
          <br />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </>
  );
};
export default LoginPopup;

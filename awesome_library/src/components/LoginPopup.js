import Modal from "react-modal";
import { useState, useContext, useEffect } from "react";
import "./LoginPopup.css";
import { UserIDContext } from ".././App";

//this is fake- for now
const fakeUser = {
  name: "Cat Rivers",
  password: "poop1monster",
  id: 12345679,
  books_currently: [{ isbn: "9781449325862" }],
  books_history: [],
};

const LoginPopup = () => {
  const [userData, setUserData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [loginData, setLoginData] = useState({});

  Modal.setAppElement("#root");
  const closeModal = () => setModalIsOpen(false);

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

        <form>
          <label for="lname">Email:</label>
          <br />
          <input type="text" id="lname" name="lname" />
          <br />
          <label for="lname">Password:</label>
          <br />
          <input type="password" id="lname" name="lname" />
          <br />
        </form>
        <br />
        <button
          name="submit"
          onClick={e => {
            e.preventDefault();
            fakeUserData.set(fakeUser);
            closeModal();
          }}
        >
          Submit
        </button>
      </Modal>
    </>
  );
};
export default LoginPopup;

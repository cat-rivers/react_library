import Modal from "react-modal";
import "./SignupPopup.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserIDContext } from ".././App";
import { v4 as uuidv4 } from "uuid";
import { createNewUser } from "../services/servicesBooks";

const generateId = () => uuidv4();

const SignupPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const userData = useContext(UserIDContext);
  const navigate = useNavigate();

  Modal.setAppElement("#root");
  const closeModal = () => setModalIsOpen(false);

  const customStyles = {
    content: {
      inset: "30% auto auto 50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
  };

  const generateNewUser = async (fullName, password, email) => {
    const newUserInfo = {
      name: fullName,
      password: password,
      email: email,
      id: generateId(),
      books_currently: [],
      books_history: [],
    };
    const newUser = await createNewUser(newUserInfo);

    userData.set(newUserInfo);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setModalIsOpen(false);

    await generateNewUser(
      e.target.fname.value,
      e.target.password.value,
      e.target.email.value
    );
    navigate("/mypage");
  };

  return (
    <>
      <div className="navbarlink" onClick={() => setModalIsOpen(true)}>
        Sign up
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Signup"
        style={customStyles}
      >
        <button onClick={closeModal}>X</button>
        <h3>Sign up</h3>

        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <label for="fname">Name:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="email">Email:</label>
          <br />
          <input type="text" id="email" name="email" />
          <br />
          <label for="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </>
  );
};
export default SignupPopup;

import Modal from "react-modal";
import { useState } from "react";
import "./SignupPopup.css";


const SignupPopup = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	Modal.setAppElement('#root');
	const closeModal = () => setModalIsOpen(false)

    const customStyles = {
		content: {
			inset: '30% auto auto 50%', 
			transform: 'translate(-50%, -50%)',
			textAlign: "center",
		},
	};


    return (<>
		<div className="navbarlink" onClick={() => setModalIsOpen(true)}>Signup</div>
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Signup"
            style={customStyles}
            >
	    
			<h3>Signup</h3>

            <form>
                <label for="fname">Name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">Email:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <label for="lname">Password:</label><br/>
                <input type="password" id="lname" name="lname"/><br/>
            </form>
            <br/>
			<button onClick={closeModal}>Submit</button>
		</Modal>
	</>)
}
export default SignupPopup;

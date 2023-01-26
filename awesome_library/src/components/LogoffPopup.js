import Modal from "react-modal";
import { useState } from "react";
import "./LoginPopup.css";

const LogoffPopup = () => {
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
		<div className="navbarlink" onClick={() => setModalIsOpen(true)}>Logoff</div>
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Login"
            style={customStyles}
            >
	    
			<h3>Logoff</h3>

            <form>
                YYZ
            </form>
            <br/>
			<button onClick={closeModal}>Submit</button>
		</Modal>
	</>)
}
export default LogoffPopup;

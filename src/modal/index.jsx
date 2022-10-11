import React from "react";
import ReactDOM from "react-dom";

import "./modal.css";

function ModalApp({ children, toogleModal, setToogleModal }) {
	return ReactDOM.createPortal(
		<div
			className={`modal-container ${
				toogleModal ? "modal-true" : "modal-false"
			}`}>
			<div
				className='modal-background'
				onClick={() => setToogleModal(false)}></div>
			<div className='modal-content'>{children}</div>
		</div>,

		document.getElementById("modal")
	);
}

export { ModalApp };

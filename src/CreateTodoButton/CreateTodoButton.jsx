import React from "react";
import Button from "@mui/material/Button";
import "./createTodoButton.css";

function CreateTodoButton({ setToogleModal, toogleModal }) {
	const onClickButton = () => {
		console.log("estoy abriendo");
		if (toogleModal === true) {
			setToogleModal(false);
		} else {
			setToogleModal(true);
		}
	};

	return (
		<div className='container-createTodoButton'>
			<Button
				onClick={onClickButton}
				sx={{ borderRadius: "8px", backgroundColor: "#2583e1" }}
				variant='contained'>
				Añadir tarea
			</Button>
		</div>
	);
}

export { CreateTodoButton };

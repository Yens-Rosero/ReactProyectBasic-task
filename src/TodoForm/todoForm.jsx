import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { todoContext } from "../TodoContext/todoContext";
import "./todoForm.css";
function TodoForm({ addTodo, setToogleModal }) {
	const [value, setValue] = useState("");

	const { todoAdd } = useContext(todoContext);

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) {
			return;
		}
		todoAdd(value);
		setValue("");
		setToogleModal(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3 className='modal-title'>Que haras en tu tarea?</h3>

			<textarea
				type='text'
				className='modal-body'
				value={value}
				placeholder='Add Todo...'
				onChange={e => setValue(e.target.value)}
			/>
			<div className='modal-actions'>
				<Button
					onClick={() => {
						setToogleModal(false);
					}}
					className='btn-add'
					variant='contained'
					color='error'
					type='button'>
					Cancelar
				</Button>
				<Button className='btn-add' variant='contained' type='submit'>
					Añadir tarea
				</Button>
			</div>
		</form>
	);
}

export { TodoForm };

import { useContext } from "react";
import TextField from "@mui/material/TextField";
import { todoContext } from "../TodoContext/todoContext";
import "./todoSearch.css";

function TodoSearch() {
	const { searchValue, setSearchValue } = useContext(todoContext);

	const onSearchInputValue = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<TextField
			onChange={onSearchInputValue}
			value={searchValue}
			label='Busca tu tarea!'
			className='todoSearch-input'
			variant='outlined'
		/>
	);
}

export { TodoSearch };
